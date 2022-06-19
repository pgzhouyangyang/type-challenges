type NumberToArray<T, U extends unknown[] = []> = T extends U['length'] ? U : NumberToArray<T, [...U, unknown]>

type NumberRange<L, H, A extends unknown[] = [], R = L> = A['length'] extends H ? (R | A[0] | A['length']) : A['length'] extends 0 ? NumberRange<L, H, [L, ...NumberToArray<L, []>], R> : NumberRange<L, H, [A['length'], ...A], R | A[0]>
