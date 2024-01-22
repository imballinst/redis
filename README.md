# @imballinstack/redis

This package is a Redis client package (based on [node-redis](https://github.com/redis/node-redis)) and takes heavy inspiration from [lru-cache](https://github.com/isaacs/node-lru-cache).

## Installation

To install, do either of the commands below (depending on your package manager). It is worth noting that `redis` here is a peer dependency, so you need to install it yourselves.

Currently this package is compatible with `redis` v4.

```shell
# With npm.
npm i redis @imballinstack/redis redis

# With yarn.
yarn add redis @imballinstack/redis redis
```

## Usage

The functions stored in `fetchersRecord` will be pivotal when you call `redisClient.fetch`. Depending on the `key`, the `params` will follow the function mapped to the fetcher in `fetchersRecord` with that matching key.

```ts
import { RedisClient } from '@imballinstack/redis';

const redisClient = new RedisClient({
  fetchersRecord: {
    user: (userId: string) => fetchUser(userId)
  },
  processors: {
    // For example: if we do `fetchUser("1")` then the resulting key will be `user:1`.
    cacheKeyProcessor: {
      user: (userId) => userId
    }
  },
  redisClientOptions: {
    socket: {
      host: '127.0.0.1'
    }
  }
});
await redisClient.connect();

// Fetch the resource.
let user1 = await redisClient.fetch({
  key: 'user',
  params: ['1']
});

// Get the cached response (from before).
user1 = await redisClient.fetch({
  key: 'user',
  params: ['1']
});

// These 2 will just result in 1 fetch, because the params are the same.
const users = await Promise.all([
  redisClient.fetch({
    key: 'user',
    params: ['1']
  }),
  redisClient.fetch({
    key: 'user',
    params: ['2']
  })
]);

// Or, fetch them together. This will result in 1 roundtrip to Redis + N fetches to the domain service, where N is number of cache miss.
const users2 = await redisClient.fetchMultiple([
  {
    key: 'user',
    params: ['1']
  },
  {
    key: 'user',
    params: ['2']
  }
]);
```

## Development

We are using Yarn Modern, so you will need to have at least Node 18. You will need to install the dependencies first by running the command below.

```shell
yarn
```

## Testing

We are running tests with docker-compose for the Redis container. The `RedisClient` for the tests are using the following options to play around [container network issue](https://stackoverflow.com/a/75284009).

```ts
socket: {
  host: '127.0.0.1';
}
```

After that, do:

```shell
# Run automated tests.
yarn test

# Run a single-run test.
yarn test:script
```

## License

MIT
