type Chunk<T extends unknown[], N extends number = 1, U extends unknown[] = []> = T extends [infer F, ...infer R] ? U['length'] extends N ? [U, ...Chunk<T, N, []>] : Chunk<R, N, [...U, F]> : U extends [] ? U : [U]
