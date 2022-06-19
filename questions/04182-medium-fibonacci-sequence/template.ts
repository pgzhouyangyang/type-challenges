type Fibonacci<T extends number, I extends any[] = [1], P extends any[] = [], N extends any[] = [1]> = I['length'] extends T ? N['length'] : Fibonacci<T, [...I, 1], N, [...P, ...N]>
