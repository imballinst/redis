export type FetcherRecordExtends = Record<string, (...args: any[]) => any>;
export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;

export type RevalidateType = {
  key: string;
  isValid: boolean;
  parsedValue: any;
};

export type CacheValueProcessor<FetcherRecord extends FetcherRecordExtends> =
  Partial<{
    [K in keyof FetcherRecord]: (
      value: string
    ) => UnwrapPromise<ReturnType<FetcherRecord[K]>>;
  }>;
export type CacheKeyProcessor<FetcherRecord extends FetcherRecordExtends> =
  Partial<{
    [K in keyof FetcherRecord]: (
      ...args: Parameters<FetcherRecord[K]>
    ) => string;
  }>;
export type CacheExpirationProcessor<
  FetcherRecord extends FetcherRecordExtends
> = Partial<{
  [K in keyof FetcherRecord]: number;
}>;

export interface Events {
  /** This is for logging and testing purposes only. */
  onCacheHit?: (effectiveKey: string, value: unknown) => unknown;
  /** This is for logging and testing purposes only. */
  onExistingPromiseHit?: (effectiveKey: string, value: unknown) => unknown;
}
