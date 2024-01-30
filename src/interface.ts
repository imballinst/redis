import {
  RedisModules,
  RedisFunctions,
  RedisScripts,
  RedisClientType,
  SetOptions
} from 'redis';
import { FetcherRecordExtends, RevalidateType, UnwrapPromise } from './types';

export interface KeyParams<
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

export interface RedisClientInterface<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules = RedisModules,
  F extends RedisFunctions = RedisFunctions,
  S extends RedisScripts = RedisScripts
> {
  instance: RedisClientType<M, F, S>;

  /**
   * This function is just a wrapper of `connect` function from `node-redis` instance.
   */
  connect(): Promise<void>;

  /**
   * This function is a wrapper of the `flushDb` function from `node-redis` instance.
   * On top of that, it also clears the internal `promisesRecord`, which is used to track
   * fetches that result in the same keys; so that we don't need multiple fetches of the same result.
   */
  cleanup(): Promise<void>;

  /**
   * This function is a wrapper of the `quit` function from `node-redis` instance.
   * On top of that, it also clears the internal `promisesRecord`, which is used to track
   * fetches that result in the same keys; so that we don't need multiple fetches of the same result.
   */
  teardown(): Promise<void>;

  /**
   * This function revalidates all keys registered inside `fetcherRecord`. If during the process of processing the cached value,
   * there is a thrown error (e.g. validation error), then the instance will do a re-fetch.
   *
   * @throws Error if `keyPrefix` is not passed when the class is instantiated.
   */
  revalidate(): Promise<RevalidateType[]>;

  fetch<K extends keyof FetcherRecord>({
    key,
    params,
    setOptions
  }: KeyParams<FetcherRecord, K> & {
    setOptions?: SetOptions;
  }): Promise<UnwrapPromise<ReturnType<FetcherRecord[typeof key]>>>;

  fetchMultiple<K extends keyof FetcherRecord>({
    keyParamsArray,
    setOptions
  }: {
    keyParamsArray: Array<KeyParams<FetcherRecord, K>>;
    setOptions?: SetOptions;
  }): Promise<KeyParamsReturnType<typeof keyParamsArray, FetcherRecord, K>>;
}
