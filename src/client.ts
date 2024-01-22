import {
  RedisClientOptions,
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts
} from 'redis';
import { createClient, SetOptions } from 'redis';

interface Events<FetcherRecord extends FetcherRecordExtends> {
  // For logging purposes only.
  onCacheHit?: (key: keyof FetcherRecord, value: unknown) => unknown;
  onExistingPromiseHit?: (key: keyof FetcherRecord, value: unknown) => unknown;
}

type FetcherRecordExtends = Record<string, (...args: any[]) => any>;
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

type CacheValueProcessor<FetcherRecord extends FetcherRecordExtends> = Partial<{
  [K in keyof FetcherRecord]: (
    value: string
  ) => UnwrapPromise<ReturnType<FetcherRecord[K]>>;
}>;
type CacheKeyProcessor<FetcherRecord extends FetcherRecordExtends> = Partial<{
  [K in keyof FetcherRecord]: (...args: Parameters<FetcherRecord[K]>) => string;
}>;

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

export class RedisClient<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules,
  F extends RedisFunctions,
  S extends RedisScripts
> {
  private fetchersRecord: FetcherRecord;
  private promisesRecord: Partial<Record<string, any>>;
  protected cacheValueProcessor: CacheValueProcessor<FetcherRecord>;
  protected cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
  protected events?: Events<FetcherRecord>;
  instance: RedisClientType<M, F, S>;

  constructor({
    fetchersRecord,
    redisClientOptions,
    processors,
    events
  }: {
    fetchersRecord: FetcherRecord;
    redisClientOptions?: RedisClientOptions<M, F, S>;
    processors?: {
      cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
      cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
    };
    events?: Events<FetcherRecord>;
  }) {
    this.fetchersRecord = fetchersRecord;
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
    return (
      keyProcessor ? `${String(key)}:${keyProcessor(...fnParams)}` : key
    ) as string;
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
      return valueProcessor ? valueProcessor(cached) : (cached as any);
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

export class RedisClientTest<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules,
  F extends RedisFunctions,
  S extends RedisScripts
> extends RedisClient<
  FetcherRecord,
  // These are types from Redis, we probably don't care about it.
  M,
  F,
  S
> {
  setEvents(events: Events<FetcherRecord>) {
    this.events = events;
  }

  setProcessors({
    cacheKeyProcessor,
    cacheValueProcessor
  }: {
    cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
    cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
  }) {
    if (cacheKeyProcessor) {
      this.cacheKeyProcessor = cacheKeyProcessor;
    }

    if (cacheValueProcessor) {
      this.cacheValueProcessor = cacheValueProcessor;
    }
  }

  getCurrentlyCachedKeys() {
    return this.instance.keys('*');
  }

  cleanupTestDependencies() {
    this.events = undefined;
    this.cacheValueProcessor = {};
    this.cacheKeyProcessor = undefined;
    return this.cleanup();
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
