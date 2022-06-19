type ToMap = {
  mapFrom: unknown
  mapTo: unknown
}

type MapTypes<T, R extends ToMap> = {
  [P in keyof T]: T[P] extends R['mapFrom'] ? R extends { mapFrom: T[P] } ? R['mapTo'] : never : T[P]
}
