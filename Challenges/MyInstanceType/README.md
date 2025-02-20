# MyInstanceType

## Description

In TypeScript, create a `MyInstanceType` type that extracts the instance type of a given class type. This type should allow you to derive the instance type from a constructor function, enabling you to work with class instances in a more type-safe manner.

This challenge will help you deepen your understanding of TypeScript's type system, particularly in working with conditional types and constructor signatures. Good luck!

### Example

```typescript
class ExampleClass {
  constructor(public id: number, public name: string) {}
}

type Result = MyInstanceType<typeof ExampleClass>; // Result should be ExampleClass
```

### Tasks

- [x] Create a type called `MyInstanceType`.
- [x] This type should take a constructor type and extract the instance type.
- [x] Implement this functionality using TypeScript's conditional types.

### Hints

- You can use TypeScript's conditional types to check if the type extends a constructor function.
- Use the `infer` keyword to capture the instance type from the constructor signature.

### Additional Notes

- Ensure that your solution works for various class types, including those with different constructor parameters.
- Test your `MyInstanceType` type with different class shapes to verify its correctness.

### Example Test Cases

```typescript
class TestClass {
  constructor(public a: number, public b: string) {}
}

type Test1 = MyInstanceType<typeof TestClass>; // Test1 should be TestClass

class AnotherClass {
  constructor(public x: boolean) {}
}

type Test2 = MyInstanceType<typeof AnotherClass>; // Test2 should be AnotherClass

type Test3 = MyInstanceType<() => void>; // Test3 should be never (not a class constructor)
```

## Footnote

This TypeScript question and the README.md file were generated by ChatGPT.
