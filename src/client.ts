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
    value: unknown
  ) => UnwrapPromise<ReturnType<FetcherRecord[K]>>;
}>;

export class XRedisClient<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules,
  F extends RedisFunctions,
  S extends RedisScripts
> {
  private record: FetcherRecord;
  private promisesRecord: Partial<Record<keyof FetcherRecord, any>>;
  private client: RedisClientType<M, F, S>;
  protected cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
  protected events?: Events<FetcherRecord>;

  constructor(
    record: FetcherRecord,
    redisClientOptions?: RedisClientOptions<M, F, S>,
    cacheValueProcessor?: CacheValueProcessor<FetcherRecord>,
    events?: Events<FetcherRecord>
  ) {
    this.record = record;
    this.promisesRecord = {};
    this.client = createClient<M, F, S>(redisClientOptions);
    this.cacheValueProcessor = cacheValueProcessor;
    this.events = events;
  }

  initialize(): Promise<RedisClientType<M, F, S>> {
    return this.client.connect();
  }

  cleanup(additionalKeysToCleanup: string[] = []) {
    this.promisesRecord = {};
    return Promise.all(
      Object.keys(this.record)
        .concat(additionalKeysToCleanup)
        .map((key) => this.client.del(key))
    );
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
    const cached = await this.client.get(key);
    if (cached) {
      if (this.events?.onCacheHit) {
        this.events?.onCacheHit(key, cached);
      }

      const cacheKeyValueProcessor = this.cacheValueProcessor?.[key];
      return cacheKeyValueProcessor ? cacheKeyValueProcessor(cached) : cached;
    }

    const existingPromise = this.promisesRecord[key];
    if (existingPromise) {
      if (this.events?.onExistingPromiseHit) {
        this.events?.onExistingPromiseHit(key, existingPromise);
      }

      return existingPromise;
    }

    const promise = this.record[key](...params)
      .then((res: any) => {
        delete this.promisesRecord[key];
        this.client.set(key, res, setOptions);
        return res;
      })
      .catch((err: unknown) => {
        delete this.promisesRecord[key];
        throw err;
      });
    this.promisesRecord[key] = promise;

    return promise;
  }
}

export class XRedisClientTest<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules,
  F extends RedisFunctions,
  S extends RedisScripts
> extends XRedisClient<
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

  cleanupTestDependencies() {
    this.events = undefined;
    this.cacheValueProcessor = undefined;
    return this.cleanup();
  }
}
