type MinusOne<T extends number, A extends any[] = []> = [...A, any, any]['length'] extends T ? [...A, any]['length'] : [...A, any]['length'] extends T ? A['length'] : MinusOne<T, [...A, any, any]>

// TODO
