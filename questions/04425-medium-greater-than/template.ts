type GreaterThan<T extends number, U extends number, V extends any[] = []> = V['length'] extends T ? false : V['length'] extends U ? true : GreaterThan<T, U, [...V, 1]>
