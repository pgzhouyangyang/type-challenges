type LengthOfString<S extends string, T extends 0[] = []> = S extends `${infer _}${infer Rest}` ? LengthOfString<Rest, [...T, 0]> : T['length']
