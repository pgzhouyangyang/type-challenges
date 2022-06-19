type Subsequence<T extends unknown[]> =
  T extends [infer First, ...infer Rest] ? (
    Subsequence<Rest> | [First, ...Subsequence<Rest>]
  ) : T
