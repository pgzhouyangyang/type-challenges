import type { Equal } from '@type-challenges/utils'
export type Includes<T extends readonly any[], U> = T extends [infer A, ...infer Rest] ? Equal<U, A> extends true ? true : Includes<Rest, U> : false
