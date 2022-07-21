type UnionToIntersection1<T> =
  (T extends any ? (_: T) => any : never) extends
  (_: infer I) => any ? I : never

type DeepPick<Obj, Path extends string> = UnionToIntersection1<
    Path extends `${infer First}.${infer Rest}` ? (
      UnionToIntersection<{ [K in First]: DeepPick<Obj[K & keyof Obj], Rest> }>
    ) : Path extends keyof Obj ? (
      { [P in Path & keyof Obj]: Obj[P] }
    ) : never>

