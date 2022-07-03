type GetInstanceType<T> =
  // String, Boolean, Number
  T extends () => infer R ?
    R :
    // union props
    T extends Array<unknown> ?
      GetInstanceType<T[number]> :
      // user defined ctors
      T extends new (...args: any) => infer R ?
        R :
        never

type PropsType<P> = {
  // deal with empty {}
  [K in keyof P]: {} extends P[K] ?
    any :
    // deal with {type: ...}
    P[K] extends Record<'type', infer T> ?
      GetInstanceType<T> :
      // deal with single ctor
      GetInstanceType<P[K]>;
}

declare function VueBasicProps<P, D, C, M>(options: {
  props: P
  data: (this: PropsType<P>) => D
  computed: C & ThisType<D>
  methods: M & ThisType<PropsType<P> & D & M & {
    [K in keyof C]: C[K] extends (...args: any[]) => unknown ?
      ReturnType<C[K]> :
      never;
  }>
}): any
