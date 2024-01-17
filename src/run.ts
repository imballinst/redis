import { RedisClient } from './client';

function testFetch<T extends unknown>(val: T): Promise<T> {
  return new Promise((res) => {
    setTimeout(() => {
      res(val);
    }, 1000);
  });
}

const redisClient = new RedisClient({
  fetchersRecord: {
    user: (userId: string) =>
      testFetch({ id: userId, name: `Name for ${userId}` })
  },
  redisClientOptions: {
    socket: {
      host: '127.0.0.1'
    }
  }
});
await redisClient.connect();
await redisClient.cleanup();

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
console.info(results);

await redisClient.teardown();
