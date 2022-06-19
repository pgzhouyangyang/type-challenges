type Join<T, U extends string | number> = T extends [infer X] ? X : T extends [infer F, ...infer R] ? F extends string ? `${F}${U}${Join<R, U>}` : never : ''
