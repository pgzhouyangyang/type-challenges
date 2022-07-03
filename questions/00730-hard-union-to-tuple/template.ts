type Union2IntersectionFn<T> = (
  T extends unknown ? (k:() => T) => void : never
  ) extends( (k: infer R) => void) ? R : never
type GetUnionLast<U> = Union2IntersectionFn<U> extends () => infer I 
  ? I : never;

type UnionToTuple<T, R extends any[] = []> = [T] extends [never] ? R : UnionToTuple<Exclude<T,GetUnionLast<T> >, [GetUnionLast<T>,...R]>

// UnionToIntersection
// type UnionToIntersection1<U> = (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
// ? R
// : never


// interface A {
//   a: string
// }
// interface B {
//   b: number
// }
// interface C {
//   c: boolean
// }

// interface IMap {
//   a: A
//   b: B
//   c: C
// }

// type UnionToOverloadFunction<T extends keyof IMap> = UnionToIntersection1<T extends any ? (x: T) => IMap[T] : never>

// type CCC =  UnionToOverloadFunction<'a' | 'b' | 'c'>