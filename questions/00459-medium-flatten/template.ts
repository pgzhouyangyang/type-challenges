// type Flatten<T extends any[]> = T extends [infer F, ...infer R] ? F extends Array<unknown> ? [...Flatten<F>, ...Flatten<R>]: [F, ...Flatten<R>] : []

type Flatten<T> = T extends [infer First, ...infer Rest] ? [...Flatten<First>, ...Flatten<Rest>] : T extends unknown[] ? T : [T]
