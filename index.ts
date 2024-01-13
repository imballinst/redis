import { createClient } from "redis";

const client = createClient({
  socket: {
    host: "127.0.0.1",
  },
});

await client.connect();

type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

class RedisClient<
  FetcherRecord extends Record<string, (...args: any[]) => any>
> {
  private record: FetcherRecord;
  private promisesRecord: Partial<Record<keyof FetcherRecord, any>>;

  constructor(record: FetcherRecord) {
    this.record = record;
    this.promisesRecord = {};
  }

  async fetch(
    key: keyof FetcherRecord,
    ...params: Parameters<FetcherRecord[typeof key]>
  ): Promise<UnwrapPromise<ReturnType<FetcherRecord[typeof key]>>> {
    const cached = await client.get(key);
    if (cached) {
      console.info("cached");
      return cached;
    }

    const existingPromise = this.promisesRecord[key];
    if (existingPromise) {
      console.info("using existing promise");
      return existingPromise;
    }

    const promise = this.record[key](...params)
      .then((res) => {
        delete this.promisesRecord[key];
        client.set(key, res, { EX: 60_000 });
        return res;
      })
      .catch((err) => {
        delete this.promisesRecord[key];
        throw err;
      });
    this.promisesRecord[key] = promise;

    return promise;
  }
}

const newClient = new RedisClient({
  hello: (value: number) => testFetch(value),
});

let val1 = newClient.fetch("hello", 123);
let val2 = newClient.fetch("hello", 123);
let val3 = newClient.fetch("hello", 123);

console.info(await Promise.all([val1, val2, val3]));

await newClient.fetch("hello", 123);
await newClient.fetch("hello", 123);
await newClient.fetch("hello", 123);

await client.disconnect();

// Helper functions.
function testFetch(val: number): Promise<number> {
  return new Promise((res) => {
    setTimeout(() => {
      res(val);
    }, 2500);
  });
}
