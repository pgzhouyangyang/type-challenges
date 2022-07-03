type GetIndex<T, K, U extends unknown[] = []> = T extends readonly [infer F, ...infer R] ? F extends K ? U['length'] : GetIndex<R, K, [...U, unknown]> : U['length']

type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number] as Capitalize<K>]: N extends true ? GetIndex<T, K> : K
}
