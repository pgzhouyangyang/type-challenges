type PrintMap = {
  s: string
  d: number
}

type Format<T extends string> = T extends `${any}%${infer A}${infer B}` ? A extends keyof PrintMap ? (arg: PrintMap[A]) => Format<B> : Format<B> : string
