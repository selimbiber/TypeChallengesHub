# Deep Readonly

## Description

In TypeScript, create a `DeepReadonly` type that makes all properties and sub-properties of an object "readonly." This type should ensure that all properties within an object and its nested objects are also read-only.

This challenge will help you gain a deep understanding of TypeScript's type system and provide you with practice using mapped types and conditional types. Good luck!

### Example

```ts
type User = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

const user: DeepReadonly<User> = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

user.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
user.address.city = "Los Angeles"; // Error: Cannot assign to 'city' because it is a read-only property.
```

### Tasks

- [x] Create a type called `DeepReadonly`.
- [x] This type should take a given object type and make all of its properties and sub-properties readonly.
- [x] Implement this functionality using TypeScript's `readonly` keyword.

### Hints

- You can use TypeScript's mapped types and conditional types to create this type.
- The `keyof` and `in` keywords can be useful for processing the keys and sub-properties of object types.

### Additional Notes

- Consider how to handle arrays and other complex types within the object.
- Ensure that your solution is recursive to handle deeply nested objects.
- Test your `DeepReadonly` type with various object structures to verify its correctness.

### Example Test Cases

```ts
type Nested = {
  a: number;
  b: {
    c: string;
    d: {
      e: boolean;
    };
  };
};

const nested: DeepReadonly<Nested> = {
  a: 1,
  b: {
    c: "test",
    d: {
      e: true,
    },
  },
};

// The following lines should produce errors
nested.a = 2; // Error
nested.b.c = "new"; // Error
nested.b.d.e = false; // Error
```

## Footnote

This TypeScript question and the README.md file were generated by ChatGPT.
