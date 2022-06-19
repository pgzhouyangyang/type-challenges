type TupleToUnion1<U extends any[] | any> = U extends [unknown, ...[unknown]] ? U[number] : U

type Without<T, U extends any[] | any> = T extends [infer F, ...infer R] ? F extends TupleToUnion1<U> ? Without<R, U> : [F, ...Without<R, U>] : T
