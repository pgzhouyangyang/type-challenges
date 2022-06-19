type Tuple2Union<T extends string[]> = T[number]

type LoopUnion<T extends string, Res extends string = '', U extends T = T > =
  T extends T // 联合类型拆分
    ? [Exclude<U, T>] extends [never]
        ? Res extends ''
          ? T
          : `${Res} ${T}`
        : LoopUnion<Exclude<U, T>, Res extends '' ? Res | T : Res |`${Res} ${T}`>
    : Res

type Combination<T extends string[]> = LoopUnion<Tuple2Union<T>>
