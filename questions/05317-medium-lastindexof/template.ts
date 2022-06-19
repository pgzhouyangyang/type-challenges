import type { Equal } from '@type-challenges/utils'

export type LastIndexOf<T extends unknown[], U> = T extends [...infer Head, infer Tail]
  ? Equal<Tail, U> extends true
    ? Head['length']
    : LastIndexOf<Head, U>
  : -1
