type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;

type Test1234 = MyAwaited<Promise<number>>; // Test1234 should be number
type Test221 = MyAwaited<Promise<void>>; // Test221 should be void
type Test321 = MyAwaited<Promise<Promise<string>>>; // Test321 should be string
type Test4123 = MyAwaited<Promise<{ name: string }>>; // Test4123 should be { name: string }
