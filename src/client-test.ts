import { RedisModules, RedisFunctions, RedisScripts } from 'redis';
import { RedisClient } from './client';
import {
  FetcherRecordExtends,
  CacheKeyProcessor,
  CacheValueProcessor,
  Events
} from './types';

export class RedisClientTest<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules = RedisModules,
  F extends RedisFunctions = RedisFunctions,
  S extends RedisScripts = RedisScripts
> extends RedisClient<
  FetcherRecord,
  // These are types from Redis, we probably don't care about it.
  M,
  F,
  S
> {
  setPrefix(prefix: string) {
    this.keyPrefix = prefix;
  }

  setEvents(events: Events) {
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
    this.keyPrefix = '';
    this.events = undefined;
    this.cacheValueProcessor = {};
    this.cacheKeyProcessor = undefined;
    return this.cleanup();
  }
}
