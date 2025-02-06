type MyParameters<T> = T extends (...args: infer P) => any ? P : never;

type Test10x = MyParameters<() => void>; // Test10x should be []
type Test20x = MyParameters<(x: number) => void>; // Test20x should be [number]
type Test30x = MyParameters<(a: string, b: boolean, c: number) => void>; // Test30x should be [string, boolean, number]
type Test40x = MyParameters<(x: number, y: string, z?: boolean) => void>; // Test40x should be [number, string, boolean?]
type Test50x = MyParameters<() => { name: string }>; // Test50x should be []
