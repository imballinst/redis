export function createDefaultCacheValueProcessor(
  key: string | number | symbol,
  value: unknown
) {
  const type = typeof value;

  switch (type) {
    case 'number': {
      return (val: unknown) => Number(val);
    }
    case 'string': {
      return (val: unknown) => String(val);
    }
    case 'undefined':
    case 'object': {
      if (value === 'null') return () => null;
      if (value === 'undefined') return () => undefined;
      return (val: string) => JSON.parse(val);
    }
    default: {
      throw new Error(
        `Cannot handle value of type ${type}. Please pass a custom cacheValueProcessor for key \`${String(key)}\`.`
      );
    }
  }
}
