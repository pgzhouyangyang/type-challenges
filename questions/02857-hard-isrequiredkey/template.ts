type IsRequiredKey<T, K extends keyof T = keyof T> = T extends {
  [P in K]-?: T[P]
}
  ? true
  : false