import { beforeAll, expect, test, afterEach, vi, afterAll } from 'vitest';
import { RedisClientTest } from '../client';
import { RedisFunctions, RedisModules, RedisScripts } from 'redis';

let redisClient: RedisClientTest<
  {
    hello: (value: number) => Promise<number>;
    user: (userId: string) => Promise<{ id: string; name: string }>;
  },
  RedisModules,
  RedisFunctions,
  RedisScripts
>;

beforeAll(async () => {
  function testFetch<T extends unknown>(val: T): Promise<T> {
    return new Promise((res) => {
      setTimeout(() => {
        res(val);
      }, 1000);
    });
  }

  redisClient = new RedisClientTest({
    fetchersRecord: {
      hello: (value: number) => testFetch(value),
      user: (userId: string) =>
        testFetch({ id: userId, name: `Name for ${userId}` })
    },
    redisClientOptions: {
      socket: {
        host: '127.0.0.1'
      }
    }
  });
  await redisClient.initialize();
  await redisClient.cleanup();
});

afterEach(async () => {
  await redisClient.cleanupTestDependencies();
  vi.restoreAllMocks();
});

afterAll(async () => {
  await redisClient.teardown();
});

test('normal fetches', async () => {
  const val1 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  const val2 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  const val3 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });

  const results = await Promise.all([val1, val2, val3]);
  expect(results).toStrictEqual([123, 123, 123]);
});

test('bulk fetches', async () => {
  const cacheHitFn = vi.fn();
  const existingPromiseFn = vi.fn();

  redisClient.setEvents({
    onCacheHit: (key, value) => cacheHitFn(key, value),
    onExistingPromiseHit: (key, value) => existingPromiseFn(key, value)
  });

  const val1 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  const val2 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  const val3 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });

  const results = await Promise.all([val1, val2, val3]);
  expect(results).toStrictEqual([123, 123, 123]);

  expect(existingPromiseFn).toBeCalledTimes(2);
  expect(cacheHitFn).toBeCalledTimes(0);
});

test('bulk fetches with cache', async () => {
  const cacheHitFn = vi.fn();
  const existingPromiseFn = vi.fn();

  redisClient.setEvents({
    onCacheHit: (key, value) => cacheHitFn(key, value),
    onExistingPromiseHit: (key, value) => existingPromiseFn(key, value)
  });

  let val1 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  let val2 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  let val3 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });

  let results = await Promise.all([val1, val2, val3]);
  expect(results).toStrictEqual([123, 123, 123]);

  expect(existingPromiseFn).toBeCalledTimes(2);
  expect(cacheHitFn).toBeCalledTimes(0);

  // Round 2, since they're already cached, so no existing promises count will increase.
  val1 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  val2 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  val3 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });

  results = await Promise.all([val1, val2, val3]);
  expect(results).toStrictEqual([123, 123, 123]);

  expect(existingPromiseFn).toBeCalledTimes(2);
  expect(cacheHitFn).toBeCalledTimes(3);
});

test('bulk fetches with cache and cache processor', async () => {
  redisClient.setProcessors({
    cacheValueProcessor: {
      hello: (value) => Number(value)
    }
  });

  let val1 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  let val2 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  let val3 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });

  let results = await Promise.all([val1, val2, val3]);
  expect(results).toStrictEqual([123, 123, 123]);

  // Round 2.  Test the cache value processor.
  val1 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  val2 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });
  val3 = redisClient.fetch({
    key: 'hello',
    params: [123]
  });

  results = await Promise.all([val1, val2, val3]);
  expect(results).toStrictEqual([123, 123, 123]);
});

test('retrieve cache with default dynamic keys', async () => {
  // We also want to check if the cache hit on dynamic keys, so, yeah.
  const cacheHitFn = vi.fn();
  const existingPromiseFn = vi.fn();

  redisClient.setEvents({
    onCacheHit: (key, value) => cacheHitFn(key, value),
    onExistingPromiseHit: (key, value) => existingPromiseFn(key, value)
  });

  redisClient.setProcessors({
    cacheKeyProcessor: {
      user: (userId) => userId
    }
  });

  let user1 = redisClient.fetch({
    key: 'user',
    params: ['hello']
  });
  let user2 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });
  let user3 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });

  let results = await Promise.all([user1, user2, user3]);
  expect(results).toStrictEqual([
    { id: 'hello', name: 'Name for hello' },
    { id: 'world', name: 'Name for world' },
    { id: 'world', name: 'Name for world' }
  ]);

  expect(existingPromiseFn).toBeCalledTimes(1);
  expect(cacheHitFn).toBeCalledTimes(0);

  // Round 2.  Test the cache value processor.
  user1 = redisClient.fetch({
    key: 'user',
    params: ['hello']
  });
  user2 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });
  user3 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });

  results = await Promise.all([user1, user2, user3]);
  expect(results).toStrictEqual([
    { id: 'hello', name: 'Name for hello' },
    { id: 'world', name: 'Name for world' },
    { id: 'world', name: 'Name for world' }
  ]);

  expect(existingPromiseFn).toBeCalledTimes(1);
  expect(cacheHitFn).toBeCalledTimes(3);
});

test('retrieve cache with dynamic keys', async () => {
  // We also want to check if the cache hit on dynamic keys, so, yeah.
  const cacheHitFn = vi.fn();
  const existingPromiseFn = vi.fn();

  redisClient.setEvents({
    onCacheHit: (key, value) => cacheHitFn(key, value),
    onExistingPromiseHit: (key, value) => existingPromiseFn(key, value)
  });

  redisClient.setProcessors({
    cacheValueProcessor: {
      user: (value) => JSON.parse(value)
    },
    cacheKeyProcessor: {
      user: (userId) => userId
    }
  });

  let user1 = redisClient.fetch({
    key: 'user',
    params: ['hello']
  });
  let user2 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });
  let user3 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });

  let results = await Promise.all([user1, user2, user3]);
  expect(results).toStrictEqual([
    { id: 'hello', name: 'Name for hello' },
    { id: 'world', name: 'Name for world' },
    { id: 'world', name: 'Name for world' }
  ]);

  expect(existingPromiseFn).toBeCalledTimes(1);
  expect(cacheHitFn).toBeCalledTimes(0);

  // Round 2.  Test the cache value processor.
  user1 = redisClient.fetch({
    key: 'user',
    params: ['hello']
  });
  user2 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });
  user3 = redisClient.fetch({
    key: 'user',
    params: ['world']
  });

  results = await Promise.all([user1, user2, user3]);
  expect(results).toStrictEqual([
    { id: 'hello', name: 'Name for hello' },
    { id: 'world', name: 'Name for world' },
    { id: 'world', name: 'Name for world' }
  ]);

  expect(existingPromiseFn).toBeCalledTimes(1);
  expect(cacheHitFn).toBeCalledTimes(3);
});
