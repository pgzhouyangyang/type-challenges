import type { IndexOf } from '../05153-medium-indexof/template'

export type Unique<T, U extends any[] = []> = T extends [infer F, ...infer R] ? IndexOf<U, F> extends -1 ? [F, ...Unique<R, [...U, F]>] : Unique<R, U> : T
