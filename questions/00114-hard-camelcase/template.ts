type CamelCase<S extends string> = S extends `${infer A}_${infer B}${infer R}` ? `${Lowercase<A>}${Uppercase<B>}${CamelCase<R>}` : Lowercase<S>
