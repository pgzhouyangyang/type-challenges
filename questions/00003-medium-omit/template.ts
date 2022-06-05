// type MyOmit<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

type MyOmit<T, K extends keyof T> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key]
}
