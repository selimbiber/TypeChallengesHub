type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type ExampleObject = {
  id?: number;
  name?: string;
  isActive?: boolean;
};

type Result2 = MyRequired<ExampleObject>; // Result2 is { id: number; name: string; isActive: boolean; }

// Test cases
type Test111 = MyRequired<{ a?: number; b?: string }>; // Test111 is { a: number; b: string }
type Test222 = MyRequired<{ x?: boolean; y?: { z?: string } }>; // Test222 is { x: boolean; y: { z: string } }
type Test333 = MyRequired<{}>; // Test333 is {}
