import { RedisModules, RedisFunctions, RedisScripts, RedisClientOptions, RedisClientType, SetOptions } from 'redis';

interface Events<FetcherRecord extends FetcherRecordExtends> {
    onCacheHit?: (key: keyof FetcherRecord, value: unknown) => unknown;
    onExistingPromiseHit?: (key: keyof FetcherRecord, value: unknown) => unknown;
}
type FetcherRecordExtends = Record<string, (...args: any[]) => any>;
type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
type CacheValueProcessor<FetcherRecord extends FetcherRecordExtends> = Partial<{
    [K in keyof FetcherRecord]: (value: unknown) => UnwrapPromise<ReturnType<FetcherRecord[K]>>;
}>;
declare class XRedisClient<FetcherRecord extends FetcherRecordExtends, M extends RedisModules, F extends RedisFunctions, S extends RedisScripts> {
    private record;
    private promisesRecord;
    private client;
    protected cacheValueProcessor?: CacheValueProcessor<FetcherRecord>;
    protected events?: Events<FetcherRecord>;
    constructor(record: FetcherRecord, redisClientOptions?: RedisClientOptions<M, F, S>, cacheValueProcessor?: CacheValueProcessor<FetcherRecord>, events?: Events<FetcherRecord>);
    initialize(): Promise<RedisClientType<M, F, S>>;
    cleanup(additionalKeysToCleanup?: string[]): Promise<string[]>;
    teardown(): Promise<void>;
    fetch({ key, params, setOptions, }: {
        key: keyof FetcherRecord;
        params: Parameters<FetcherRecord[typeof key]>;
        setOptions?: SetOptions;
    }): Promise<UnwrapPromise<ReturnType<FetcherRecord[typeof key]>>>;
}

export { XRedisClient };
