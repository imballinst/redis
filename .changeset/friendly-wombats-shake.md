---
'@imballinstack/redis': minor
---

BREAKING: some breaking API changes

1. `fetchersRecord` is now `fetcherRecord`
2. `processors` values now contain without `Processor` suffix
3. Add new field, `processors.cacheExpiration`, a `Record<string, number>`. It will be used to set the expiration timers (in ms) for each key. This is so that we only need to define that once.
