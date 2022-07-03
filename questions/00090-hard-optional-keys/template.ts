type OptionalKeys<T> = keyof {
  [P in keyof T as { [K in P]?: T[K] } extends { [K in P]: T[K] } ? P : never ]: T[P]
}
