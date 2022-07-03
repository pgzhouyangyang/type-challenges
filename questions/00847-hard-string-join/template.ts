// your answers
type ReturnType1<T extends string, P> = P extends [infer First extends string, ...infer Rest]
  ? `${First}${Rest extends [] ? "" : `${T}${ReturnType1<T, Rest>}`}`
  : "";

declare function join<T extends string>(
  delimiter: T
): <P extends string[]>(...parts: P) => ReturnType1<T, P>;