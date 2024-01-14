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

export class RedisClient<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules,
  F extends RedisFunctions,
  S extends RedisScripts
> {
  private fetchersRecord: FetcherRecord;
  private promisesRecord: Partial<Record<string, any>>;
  protected client: RedisClientType<M, F, S>;
  protected cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
  protected cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
  protected events?: Events<FetcherRecord>;

  constructor({
    fetchersRecord,
    redisClientOptions,
    cacheValueProcessor,
    cacheKeyProcessor,
    events
  }: {
    fetchersRecord: FetcherRecord;
    redisClientOptions?: RedisClientOptions<M, F, S>;
    cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
    cacheKeyProcessor?: CacheKeyProcessor<FetcherRecord>;
    events?: Events<FetcherRecord>;
  }) {
    this.fetchersRecord = fetchersRecord;
    this.promisesRecord = {};
    this.client = createClient<M, F, S>(redisClientOptions);
    this.cacheValueProcessor = cacheValueProcessor;
    this.cacheKeyProcessor = cacheKeyProcessor;
    this.events = events;
  }

  initialize(): Promise<RedisClientType<M, F, S>> {
    return this.client.connect();
  }

  cleanup() {
    this.promisesRecord = {};
    return this.client.flushDb();
  }

  teardown() {
    this.promisesRecord = {};
    return this.client.disconnect();
  }

  async fetch({
    key,
    params,
    setOptions
  }: {
    key: keyof FetcherRecord;
    params: Parameters<FetcherRecord[typeof key]>;
    setOptions?: SetOptions;
  }): Promise<UnwrapPromise<ReturnType<FetcherRecord[typeof key]>>> {
    const keyProcessor = this.cacheKeyProcessor?.[key];
    const effectiveKey = (
      keyProcessor ? `${String(key)}:${keyProcessor(...params)}` : key
    ) as string;

    const cached = await this.client.get(effectiveKey);
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
        this.client.set(
          effectiveKey,
          typeof res !== 'string' ? JSON.stringify(res) : res,
          setOptions
        );
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

  setCacheValueProcessor(
    cacheValueProcessor: CacheValueProcessor<FetcherRecord>
  ) {
    this.cacheValueProcessor = cacheValueProcessor;
  }

  getCurrentlyCachedKeys() {
    return this.client.keys('*');
  }

  cleanupTestDependencies() {
    this.events = undefined;
    this.cacheValueProcessor = undefined;
    this.cacheKeyProcessor = undefined;
    return this.cleanup();
  }
}
