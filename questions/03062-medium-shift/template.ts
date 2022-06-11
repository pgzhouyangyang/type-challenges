type Shift<T> = T extends [unknown, ...infer R] ? R : []
