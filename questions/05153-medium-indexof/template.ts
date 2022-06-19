import type { Equal } from '@type-challenges/utils'

export type IndexOf<T, U, A extends unknown[] = []> = T extends [infer F, ...infer R] ? Equal<U, F> extends true ? A['length'] : IndexOf<R, U, [unknown, ...A]> : -1
