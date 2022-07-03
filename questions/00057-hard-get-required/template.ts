type GetRequired<T> = {
  [K in keyof T as { [P in K]-?: T[P] } extends T ? K : never ]: T[K]
}
