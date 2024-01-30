import {
  RedisClientOptions,
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts
} from 'redis';
import { createClient, SetOptions } from 'redis';
import {
  FetcherRecordExtends,
  UnwrapPromise,
  CacheValueProcessor,
  CacheKeyProcessor,
  RevalidateType,
  Events
} from './types';

interface KeyParams<
  FetcherRecord extends FetcherRecordExtends,
  K extends keyof FetcherRecord
> {
  key: Exclude<K, symbol>;
  params: Parameters<FetcherRecord[K]>;
}
type KeyParamsReturnType<
  KP extends Array<KeyParams<FetcherRecord, K>>,
  FetcherRecord extends FetcherRecordExtends,
  K extends keyof FetcherRecord
> = Array<UnwrapPromise<ReturnType<FetcherRecord[KP[number]['key']]>>>;

/**
 * The interface of the constructor. You might want to use this interface if you are wrapping the client
 * with your own implementation.
 */
export interface RedisClientConstructorOptions<
  FetcherRecord extends FetcherRecordExtends,
  M extends RedisModules = RedisModules,
  F extends RedisFunctions = RedisFunctions,
  S extends RedisScripts = RedisScripts
> {
  /**
   * A record containing key/function map. The key and function that you set up here can be used inside the `processors` field.
   */
  fetchersRecord: FetcherRecord;
  /**
   * The key prefix for the keys set using the instance. Usually useful to have some kind of "namespacing". This field is also required
   * to be set if you want to use `revalidate` method of the class.
   */
  keyPrefix?: string;
  /**
   * The options passed to `node-redis` instance.
   */
  redisClientOptions?: RedisClientOptions<M, F, S>;
  /**
   * The processors for each of the keys set in `fetchersRecord`.
   */
  processors?: {
    /**
     * A record containing key/function map. The function uses the parameters of the function defined in `fetchersRecord`.
     * The function's return value will be appended to the key in the Redis cache. For example:
     *
     * ```ts
     * {
     *   team: (teamId) => teamId
     * }
     * ```
     *
     * This will result in `team:{teamId}` key in Redis cache; or `{keyPrefix}:team:${teamId}` if you also provide `keyPrefix`.
     */
    cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
    /**
     * A record containing key/function map. The function is used to "parse" the value from Redis cache. Since Redis can only store
     * strings, then when we retrieve it from cache, we need to somehow parse it back.
     *
     * ```ts
     * {
     *   team: (value) => JSON.parse(value)
     * }
     * ```
     *
     * If you are using something like [zod](https://github.com/colinhacks/zod), you can use the `parse` method from a schema,
     * so that if the schema doesn't match, it will throw an error and hence it will re-fetch from the source again.
     *
     * ```ts
     * {
     *   team: (value) => Team.parse(JSON.parse(value))
     * }
     * ```
     */
    cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
  };
  /**
   * List of events that you can use to track things that are happening inside the instance.
   */
  events?: Events;
}

/**
 * RedisClient is the main exported class from `@imballinstack/redis`. With this class, you can create
 * a record containing fetchers and the keys will be used for fetch later and increase type-safety.
 */
export class RedisClient<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules = RedisModules,
  F extends RedisFunctions = RedisFunctions,
  S extends RedisScripts = RedisScripts
> {
  private fetchersRecord: FetcherRecord;
  private promisesRecord: Partial<Record<string, any>>;
  protected keyPrefix: string;
  protected cacheValueProcessor: CacheValueProcessor<FetcherRecord>;
  protected cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
  protected events?: Events;
  instance: RedisClientType<M, F, S>;

  constructor({
    fetchersRecord,
    keyPrefix,
    redisClientOptions,
    processors,
    events
  }: RedisClientConstructorOptions<FetcherRecord, M, F, S>) {
    this.fetchersRecord = fetchersRecord;
    this.keyPrefix = keyPrefix ?? '';
    this.promisesRecord = {};
    this.instance = createClient<M, F, S>(redisClientOptions);
    this.cacheValueProcessor = processors?.cacheValueProcessor ?? {};
    this.cacheKeyProcessor = processors?.cacheKeyProcessor;
    this.events = events;
  }

  /**
   * This function is just a wrapper of `connect` function from `node-redis` instance.
   */
  connect(): Promise<RedisClientType<M, F, S>> {
    return this.instance.connect();
  }

  /**
   * This function is a wrapper of the `flushDb` function from `node-redis` instance.
   * On top of that, it also clears the internal `promisesRecord`, which is used to track
   * fetches that result in the same keys; so that we don't need multiple fetches of the same result.
   */
  cleanup() {
    this.promisesRecord = {};
    return this.instance.flushDb();
  }

  /**
   * This function is a wrapper of the `quit` function from `node-redis` instance.
   * On top of that, it also clears the internal `promisesRecord`, which is used to track
   * fetches that result in the same keys; so that we don't need multiple fetches of the same result.
   */
  teardown() {
    this.promisesRecord = {};
    return this.instance.quit();
  }

  /**
   * This function revalidates all keys registered inside `fetcherRecord`. If during the process of processing the cached value,
   * there is a thrown error (e.g. validation error), then the instance will do a re-fetch.
   *
   * @throws Error if `keyPrefix` is not passed when the class is instantiated.
   */
  async revalidate() {
    if (!this.keyPrefix) {
      throw new Error(
        'Error: unable to revalidate if no key prefix is given, since there are no boundaries for the retrieved keys.'
      );
    }

    const allKeys: string[] = [];
    let cursor = 0;

    while (true) {
      const { cursor: nextCursor, keys } = await this.instance.scan(0, {
        MATCH: `${this.keyPrefix}*`
      });

      cursor = nextCursor;
      allKeys.push(...keys);

      if (cursor === 0) {
        break;
      }
    }

    // Revalidate the contents.
    const values = await this.instance.mGet(allKeys);
    const fetcherKeys = Object.keys(this.fetchersRecord);
    const results: Array<RevalidateType> = [];

    for (let i = 0; i < allKeys.length; i++) {
      const key = allKeys[i];
      const effectiveKey = key.slice(this.keyPrefix.length);
      const firstKeySegment = fetcherKeys.find((key) =>
        effectiveKey.startsWith(`${key}:`)
      );
      if (!firstKeySegment) continue;

      const value = values[i];
      const result: RevalidateType = {
        key,
        isValid: true,
        parsedValue: value
      };

      try {
        if (value) {
          // In case it throws, we know.
          result.parsedValue =
            await this.cacheValueProcessor[firstKeySegment]?.(value);
        }
      } catch (err) {
        result.isValid = false;
      }

      results.push(result);
    }

    return results;
  }

  async fetch<K extends keyof FetcherRecord>({
    key,
    params,
    setOptions
  }: KeyParams<FetcherRecord, K> & {
    setOptions?: SetOptions;
  }): Promise<UnwrapPromise<ReturnType<FetcherRecord[typeof key]>>> {
    const effectiveKey = this.getEffectiveKey(key, params);

    const cached = await this.instance.get(effectiveKey);
    return this.internalCacheValueProcessor({
      key,
      params,
      setOptions,
      cached,
      effectiveKey
    });
  }

  async fetchMultiple<K extends keyof FetcherRecord>({
    keyParamsArray,
    setOptions
  }: {
    keyParamsArray: Array<KeyParams<FetcherRecord, K>>;
    setOptions?: SetOptions;
  }): Promise<KeyParamsReturnType<typeof keyParamsArray, FetcherRecord, K>> {
    const keys = keyParamsArray.map((item) => item.key);
    const effectiveKeys = keys.map((key, idx) =>
      this.getEffectiveKey(key, keyParamsArray[idx].params)
    );

    const values = await this.instance.mGet(effectiveKeys);
    const results = await Promise.all(
      values.map((value, idx) =>
        this.internalCacheValueProcessor({
          cached: value,
          effectiveKey: effectiveKeys[idx],
          key: keys[idx],
          params: keyParamsArray[idx].params,
          setOptions
        })
      )
    );

    return results;
  }

  private getEffectiveKey(
    key: keyof FetcherRecord,
    fnParams: Parameters<FetcherRecord[typeof key]>
  ) {
    const keyProcessor = this.cacheKeyProcessor?.[key];
    const processedKey = keyProcessor
      ? `${String(key)}:${keyProcessor(...fnParams)}`
      : key;

    return `${this.keyPrefix}${processedKey as string}`;
  }

  private internalCacheValueProcessor({
    key,
    params,
    setOptions,
    cached,
    effectiveKey
  }: Parameters<this['fetch']>[0] & {
    cached: string | null;
    effectiveKey: string;
  }) {
    if (cached) {
      if (this.events?.onCacheHit) {
        this.events?.onCacheHit(effectiveKey, cached);
      }

      const valueProcessor = this.cacheValueProcessor?.[key];

      try {
        // If `valueProcessor` throws something here, then there's an error and it means
        // we have to re-fetch the thing.
        return valueProcessor ? valueProcessor(cached) : (cached as any);
      } catch (err) {
        // No-op.
      }
    }

    const existingPromise = this.promisesRecord[effectiveKey];
    if (existingPromise) {
      if (this.events?.onExistingPromiseHit) {
        this.events?.onExistingPromiseHit(effectiveKey, existingPromise);
      }

      return existingPromise;
    }

    const promise = this.fetchersRecord[key](...params)
      .then((res: any) => {
        delete this.promisesRecord[effectiveKey];
        this.instance.set(
          effectiveKey,
          typeof res !== 'string' ? JSON.stringify(res) : res,
          setOptions
        );

        if (!this.cacheValueProcessor[key]) {
          // Set the defaults.
          this.cacheValueProcessor[key] = createDefaultCacheValueProcessor(
            key,
            res
          );
        }

        return res;
      })
      .catch((err: unknown) => {
        delete this.promisesRecord[effectiveKey];
        throw err;
      });
    this.promisesRecord[effectiveKey] = promise;

    return promise;
  }
}

// Helper functions.
function createDefaultCacheValueProcessor(
  key: string | number | symbol,
  value: unknown
) {
  const type = typeof value;

  switch (type) {
    case 'number': {
      return (val: unknown) => Number(val);
    }
    case 'string': {
      return (val: unknown) => String(val);
    }
    case 'undefined':
    case 'object': {
      if (value === 'null') return () => null;
      if (value === 'undefined') return () => undefined;
      return (val: string) => JSON.parse(val);
    }
    default: {
      throw new Error(
        `Cannot handle value of type ${type}. Please pass a custom cacheValueProcessor for key \`${String(key)}\`.`
      );
    }
  }
}
