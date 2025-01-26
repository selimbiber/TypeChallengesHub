type MyExclude<T, U> = T extends U ? never : T;

type ExampleUnion = string | number | boolean;

type Result123 = MyExclude<ExampleUnion, number>; // Result123: string | boolean
type Result223 = MyExclude<1 | 2 | 3 | 4, 2 | 3>; // Result223: 1 | 4
type Result323 = MyExclude<"a" | "b" | "c", "b">; // Result323: "a" | "c"
