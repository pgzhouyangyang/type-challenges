type RequiredKeys<T> = keyof {
  [K in keyof T as { [P in K]: T[K] } extends { [P in K]-?: T[K] } ? K : never ]: T[K]
}
