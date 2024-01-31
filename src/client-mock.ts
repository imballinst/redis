import {
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts
} from 'redis';
import { writeFile, readFile } from 'fs/promises';
import { FetcherRecordExtends } from './types';
import { RedisClient, RedisClientConstructorOptions } from './client';
import path from 'path';

export class MockRedisClient<
  FetcherRecord extends FetcherRecordExtends,
  // These are types from Redis, we probably don't care about it.
  M extends RedisModules = RedisModules,
  F extends RedisFunctions = RedisFunctions,
  S extends RedisScripts = RedisScripts
> extends RedisClient<FetcherRecord, M, F, S> {
  constructor({
    fetcherRecord,
    keyPrefix,
    processors,
    events,
    pathToRedisMockFile
  }: RedisClientConstructorOptions<FetcherRecord, M, F, S> & {
    pathToRedisMockFile?: string;
  }) {
    super({
      fetcherRecord,
      keyPrefix,
      // Intentionally set this to empty object so we don't let Redis parse this options.
      // We're not going to use it, anyway.
      redisClientOptions: {},
      processors,
      events
    });

    this.instance = new MockRedisInstance(
      pathToRedisMockFile
    ) as unknown as RedisClientType<M, F, S>;
  }
}

// Helper class.
class MockRedisInstance {
  private inMemoryRedis: Record<string, string> = {};
  private timeout: any = null;
  private pathToRedisMock: string;

  constructor(pathToRedisMockFile?: string) {
    this.pathToRedisMock =
      pathToRedisMockFile ?? path.join(process.cwd(), '.redis-mock');
  }

  async connect() {
    try {
      // Exists.
      const content = await readFile(this.pathToRedisMock, 'utf-8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();

        const indexOfEqualSymbol = trimmed.indexOf('=');
        if (indexOfEqualSymbol === -1) continue;

        const key = trimmed.slice(0, indexOfEqualSymbol).trim();
        const value = trimmed.slice(indexOfEqualSymbol + 1).trim();

        this.inMemoryRedis[key] = value;
      }
    } catch (err) {
      // Doesn't exist yet.
      await writeFile(this.pathToRedisMock, '', 'utf-8');
    }
  }

  async flushDb() {
    this.inMemoryRedis = {};
    this.flush();
  }

  quit() {
    return Promise.resolve();
  }

  scan(_: number, criteria: { MATCH: string }) {
    return {
      cursor: 0,
      keys: Object.keys(this.inMemoryRedis).filter((key) =>
        new RegExp(criteria.MATCH.replace('*', '.+')).test(key)
      )
    };
  }

  on(eventName: string, cb: (...args: any[]) => unknown) {
    // No-op.
  }

  off(eventName: string, cb: (...args: any[]) => unknown) {
    // No-op.
  }

  async mGet(keys: string[]) {
    return keys.map((key) => this.inMemoryRedis[key]);
  }

  async mSet(values: Array<[string, string]>) {
    for (const value of values) {
      const [k, v] = value;
      this.inMemoryRedis[k] = v;
    }

    this.flush();
  }

  async get(key: string) {
    return this.inMemoryRedis[key];
  }

  async set(key: string, value: string) {
    this.inMemoryRedis[key] = value;
    this.flush();
  }

  private flush() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const lines: string[] = [];

      for (const key in this.inMemoryRedis) {
        lines.push(`${key}=${this.inMemoryRedis[key]}`);
      }

      writeFile(this.pathToRedisMock, lines.join('\n'), 'utf-8');
    }, 5000);
  }
}
