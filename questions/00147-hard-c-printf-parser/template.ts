type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

// type ParsePrintFormat<S extends string> = S extends `%${infer F}${infer R}` ? F extends '%' ? ParsePrintFormat<`${F}${R}`> : F extends keyof ControlsMap ? [ControlsMap[F], ...ParsePrintFormat<R>] : [] : S extends `${infer F}${infer R}` ? ParsePrintFormat<R> : []

type ParsePrintFormat<S> = S extends `${any}%${infer A}${infer B}` ? A extends keyof ControlsMap ? [ControlsMap[A], ...ParsePrintFormat<B>] : ParsePrintFormat<B> : []
