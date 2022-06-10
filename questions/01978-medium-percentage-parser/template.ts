type IsSign<T extends string> = T extends `+${infer R}` ? ['+', R]: T extends `-${infer R}` ? ['-', R] : ['', T]

type IsPercent<T extends string> = T extends `${infer R}%` ? [R, '%']: [T, '']

type PercentageParser<A extends string> = [IsSign<A>[0], ...IsPercent<IsSign<A>[1]>]
