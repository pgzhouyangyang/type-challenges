type Mutable<T extends Record<any, any>> = {
  -readonly [P in keyof T]: T[P]
}
