type StrToUnion<S extends string> = S extends `${infer F}${infer R}` ? F | StrToUnion<R> : never

type AllCombinations<S extends string, U extends string = StrToUnion<S>> = [U] extends [never] ? '' : '' | {
  [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`
}[U]
