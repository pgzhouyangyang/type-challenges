type GetOptional<T> = {
  [K in keyof T as { [P in K]: T[P] } extends T ? never : K]: T[K]
}
