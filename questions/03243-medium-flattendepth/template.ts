type FlattenDepth<T, D = 1, A extends Array<unknown> = []> = A['length'] extends D ? T :T extends [infer F, ...infer Rest] ? F extends Array<unknown> ? [...FlattenDepth<F, D, [0, ...A]>, ...FlattenDepth<Rest, D, A>] : [F, ...FlattenDepth<Rest, D, A>] : T

// type FlattenDepth<T, P extends number = 1, A extends any[] = []> = A['length'] extends P
//   ? T
//   : T extends [infer F, ...infer R]
//     ? F extends any[]
//       ? [...FlattenDepth<F, P, [0, ...A]>, ...FlattenDepth<R, P, A>]
//       : [F, ...FlattenDepth<R, P, A>]
//     : T
