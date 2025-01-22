type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type ExampleObject2 = {
  id: number;
  name: string;
  isActive: boolean;
};

type Result22 = MyPick<ExampleObject2, "id" | "name">; // Result22 is { id: number; name: string }

type Test12 = MyPick<{ a: number; b: string; c: boolean }, "a" | "b">; // Test12 is { a: number; b: string }
type Test23 = MyPick<{ x: boolean; y: { z: string; w: number } }, "x">; // Test23 is { x: boolean }
