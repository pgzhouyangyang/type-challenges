type ToNumber<S extends string, U extends unknown[] = []> = S extends `${U['length']}` ? U['length'] : ToNumber<S, [...U, unknown]>
