type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

// Test Case 1: String keys and number values
type StringNumberRecord = MyRecord<string, number>;
// StringNumberRecord should be an object type where all keys are strings and all values are numbers.
// Example: { "key1": 1, "key2": 2 }

// Test Case 2: Specific string keys and string values
type UserRecord = MyRecord<"name" | "age", string>;
// UserRecord should be an object type with 'name' and 'age' as keys, both having string values.
// Example: { name: "Alice", age: "30" }

// Test Case 3: Number keys and boolean values
type BooleanRecord = MyRecord<number, boolean>;
// BooleanRecord should be an object type where all keys are numbers and all values are booleans.
// Example: { 1: true, 2: false }

// Test Case 4: Union type for keys
type UnionKeyRecord = MyRecord<"a" | "b" | "c", number>;
// UnionKeyRecord should be an object type with keys 'a', 'b', and 'c', all having number values.
// Example: { a: 1, b: 2, c: 3 }

// Test Case 5: Empty object type
type EmptyRecord = MyRecord<never, any>;
// EmptyRecord should be an empty object type since there are no keys.
// Example: {}
