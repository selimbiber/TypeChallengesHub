type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Test Cases
type ExampleFunction = () => string;
type Result = MyReturnType<ExampleFunction>; // Result should be string

type Test1 = MyReturnType<() => number>; // Test1 should be number
type Test2 = MyReturnType<() => void>; // Test2 should be void
type Test3 = MyReturnType<() => { name: string }>; // Test3 should be { name: string }

// Type assertions to check results
const test1: Test1 = 42; // This should be valid
const test2: Test2 = undefined; // This should be valid
const test3: Test3 = { name: "Alice" }; // This should be valid

// Uncommenting the following lines will cause TypeScript errors if the types are incorrect
// const invalidTest: Test1 = "not a number"; // This should cause an error
// const invalidTest2: Test3 = { age: 30 }; // This should cause an error
