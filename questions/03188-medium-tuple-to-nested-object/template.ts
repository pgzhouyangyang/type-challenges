type TupleToNestedObject<T extends any[], U> = T extends [infer F, ...infer Rest] ? { [K in F & string]: TupleToNestedObject<Rest, U> } : U
