type Trunc<T extends string | number> = `${T}` extends `${infer A}.${string}` ? A : `${T}`
