type DropString<S, R extends string> = S extends `${infer F}${infer D}` ? F extends StringToUnion<R> ? `${DropString<D, R>}` : `${F}${DropString<D, R>}` : S


