type DeepReadonly<T> = T extends Function ? T : {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}
