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
  key: K;
  params: Parameters<FetcherRecord[K]>;
}
type KeyParamsReturnType<
  KP extends Array<KeyParams<FetcherRecord, K>>,
  FetcherRecord extends FetcherRecordExtends,
  K extends keyof FetcherRecord
> = Array<UnwrapPromise<ReturnType<FetcherRecord[KP[number]['key']]>>>;

export interface RedisClientConstructorOptions<
  FetcherRecord extends FetcherRecordExtends,
  M extends RedisModules = RedisModules,
  F extends RedisFunctions = RedisFunctions,
  S extends RedisScripts = RedisScripts
> {
  fetchersRecord: FetcherRecord;
  keyPrefix?: string;
  redisClientOptions?: RedisClientOptions<M, F, S>;
  processors?: {
    cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
    cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
  };
  events?: Events;
}

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

  connect(): Promise<RedisClientType<M, F, S>> {
    return this.instance.connect();
  }

  cleanup() {
    this.promisesRecord = {};
    return this.instance.flushDb();
  }

  teardown() {
    this.promisesRecord = {};
    return this.instance.quit();
  }

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
