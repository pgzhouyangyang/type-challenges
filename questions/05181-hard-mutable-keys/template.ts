import type { Equal } from '@type-challenges/utils'

export type MutableKeys<T> = keyof {
  [K in keyof T as Equal<{[P in K]: T[P] }, { -readonly [P in K]: T[P] }> extends true ? K : never ]: T[K]

}