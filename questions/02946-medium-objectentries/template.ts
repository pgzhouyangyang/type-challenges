type RemoveUndefined<T> = [T] extends [undefined] ? T : T extends undefined ? never : T

type ObjectEntries<T> = {
  [P in keyof T]-?: [P, RemoveUndefined<T[P]>]
}[keyof T]
