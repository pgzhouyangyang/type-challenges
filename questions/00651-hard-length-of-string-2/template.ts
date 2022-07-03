type LengthOfString2<S extends string, A extends unknown[] = []> = S extends `${string}${infer R}` ? LengthOfString2<R, [unknown, ...A]> : A['length']
