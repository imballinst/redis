import { beforeAll, expect, test, afterEach, vi, afterAll } from 'vitest';
import { XRedisClientTest } from '../client';
import { RedisFunctions, RedisModules, RedisScripts } from 'redis';

let redisClient: XRedisClientTest<
  {
    hello: (value: number) => Promise<number>;
  },
  RedisModules,
  RedisFunctions,
  RedisScripts
>;

beforeAll(async () => {
  function testFetch(val: number): Promise<number> {
    return new Promise((res) => {
      setTimeout(() => {
        res(val);
      }, 1000);
    });
  }

  redisClient = new XRedisClientTest(
    {
      hello: (value: number) => testFetch(value)
    },
    {
      socket: {
        host: '127.0.0.1'
      }
    }
  );
  await redisClient.initialize();
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
  expect(results).toStrictEqual(['123', '123', '123']);

  expect(existingPromiseFn).toBeCalledTimes(2);
  expect(cacheHitFn).toBeCalledTimes(3);
});

test('bulk fetches with cache and cache processor', async () => {
  redisClient.setCacheValueProcessor({
    hello: (value) => Number(value)
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
