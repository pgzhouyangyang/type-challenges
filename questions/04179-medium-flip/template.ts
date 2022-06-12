type Flip<T extends Record<keyof any, any>> = {
  [P in keyof T as `${T[P]}`]: P
}
