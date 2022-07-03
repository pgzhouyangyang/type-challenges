type FilterOut<T extends any[], F> = T extends [infer A, ...infer R] ? [A] extends [F] ? FilterOut<R, F> : [A, ...FilterOut<R, F>] : T
