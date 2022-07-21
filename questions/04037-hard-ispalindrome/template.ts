type IsPalindrome<T extends string | number> = `${T}` extends `${Reverse1<T>}` ? true : false


type Reverse1<T extends string | number> = `${T}` extends `${infer F}${infer R}` ? `${Reverse1<R>}${F}`: T