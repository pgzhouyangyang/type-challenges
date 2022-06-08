type AppendToObject<T, U extends string | number | symbol, V> = {
  [P in keyof T | U]: P extends keyof T ? T[P] : V
}
