type MyExtract<T, U> = T extends U ? T : never;

type ExampleUnion1 = string | number | boolean;

type Result532 = MyExtract<ExampleUnion1, string>; // Result532 should be string

type Test123 = MyExtract<string | number | boolean, string>; // Test123 should be string
type Test234 = MyExtract<string | number | boolean, number>; // Test234 should be number
type Test345 = MyExtract<string | number | boolean, boolean>; // Test345 should be boolean
type Test456 = MyExtract<string | number | boolean, symbol>; // Test456 should be never
