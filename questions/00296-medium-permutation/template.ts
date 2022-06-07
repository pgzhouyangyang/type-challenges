// type Permutation<T extends keyof any> = [T] extends [never] ? [] : { [P in T]: [P, ...Permutation<T extends P ? never : T>] }[T]
// TODO
type Permutation<T extends keyof any> = [T] extends [never]
  ? []
  : {
      [TT in T]: [TT, ...Permutation<Exclude<T, TT>>]
    }[T]
