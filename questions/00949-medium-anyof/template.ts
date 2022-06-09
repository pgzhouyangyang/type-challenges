type False = 0 | false | '' | [] | Record<string, never> | undefined | null

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer Rest] ? F extends False ? AnyOf<Rest> : true : false
