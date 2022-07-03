type DeepObjectToUniq<O extends object> = {
  [K in keyof O]: O[K] extends object
    ? DeepObjectToUniq<O[K] & { _?: [O, K] }>
    : O[K];
};