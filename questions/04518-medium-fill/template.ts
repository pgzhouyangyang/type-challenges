type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  S extends Array<unknown> = [],
  E extends Array<unknown> = [],
> = T extends [infer F, ...infer R] ?
  S['length'] extends Start ?
    E['length'] extends End ?
        [...E, F, ...R] :
      Fill<R, N, Start, End, S, [...E, N]> :
    Fill<R, N, Start, End, [...S, F], [...E, F]> :
  E
