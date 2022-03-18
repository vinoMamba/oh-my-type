type MyExclude<T, U> = T extends U ? never : T;

type Obj = { name: string; age: number };
type Obj1 = { name: string; age: number; isMarried: boolean };
type Obj2 = MyExclude<Obj, Obj1>;
type Obj3 = Exclude<Obj, Obj1>;
const obj: Obj = { name: "vino", age: 12 };
