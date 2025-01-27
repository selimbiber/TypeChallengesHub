type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Original object type
type Original = {
  id: number;
  name: string;
  age: number;
  email: string;
};

// Test case 1: Omit the 'age' key
type RandomTest1 = MyOmit<Original, "age">; // RandomTest1: { id: number; name: string; email: string; }

// Test case 2: Omit 'id' and 'name' keys
type RandomTest2 = MyOmit<Original, "id" | "name">; // RandomTest2: { age: number; email: string; }

// Test case 3: Omit the 'email' key
type RandomTest3 = MyOmit<Original, "email">; // RandomTest3: { id: number; name: string; age: number; }

// Test case 4: Omit no keys
type RandomTest4 = MyOmit<Original, never>; // RandomTest4: { id: number; name: string; age: number; email: string; }

// Test case 5: Omit all keys
type RandomTest5 = MyOmit<Original, "id" | "name" | "age" | "email">; // RandomTest5: {}

// Test case 6: Omit a non-existent key (should not change anything)
type RandomTest6 = MyOmit<Original, "nonExistentKey">; // RandomTest6: { id: number; name: string; age: number; email: string; }

// Test case 7: Omit multiple keys
type RandomTest7 = MyOmit<Original, "id" | "email">; // RandomTest7: { name: string; age: number; }

// Test case 8: Working with nested objects
type NestedOriginal = {
  id: number;
  user: {
    name: string;
    age: number;
  };
};

// Omit the 'user' object
type RandomTest8 = MyOmit<NestedOriginal, "user">; // RandomTest8: { id: number; }

// Test case 9: Empty object type
type Empty = {};
type RandomTest9 = MyOmit<Empty, "anyKey">; // RandomTest9: {}
