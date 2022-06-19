type Zip<T extends unknown[], U extends unknown[]> = T extends [infer F, ...infer R] ? U extends [infer F1, ...infer R1] ? [[F, F1], ...Zip<R, R1>]: [] : []
