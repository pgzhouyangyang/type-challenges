type UnionToIntersection<U> = {
  [K in U as symbol]: (x: K) => any
} extends Record<symbol, (x: infer T) => any>
  ? T
  : never
