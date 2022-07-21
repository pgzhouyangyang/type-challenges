
  type Camelize<T> = T extends object ? {
    [P in keyof T as P extends `${infer F}_${infer C}${infer R}` ? `${F}${Uppercase<C>}${R}` : P]:
    T[P] extends unknown[] ? (
      CamelizeArray<T[P]>
    ) : Camelize<T[P]>
  } : T

type CamelizeArray<T> =
  T extends [infer First, ...infer Rest] ? (
    [Camelize<First>, ...CamelizeArray<Rest>]
  ) : T