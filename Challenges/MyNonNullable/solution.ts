type MyNonNullable<T> = T extends null | undefined ? never : T;

type Test1x = MyNonNullable<string | number | null | undefined>; // Test1x should be string | number
type Test2x = MyNonNullable<null | undefined | boolean>; // Test2x should be boolean
type Test3x = MyNonNullable<"a" | null | "b" | undefined>; // Test3x should be "a" | "b"
type Test4x = MyNonNullable<null | undefined>; // Test4x should be never
