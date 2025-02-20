# My Extract Type

## Description

In TypeScript, create a `MyExtract` type that extracts specific types from a given union type. This type should allow you to filter out types from a union based on a specified condition.

This challenge will help you deepen your understanding of TypeScript's type system, particularly in working with conditional types and type filtering. Good luck!

### Example

```ts
type ExampleUnion = string | number | boolean;

type Result = MyExtract<ExampleUnion, string>; // Result should be string
```

### Tasks

- [x] Create a type called `MyExtract`.
- [x] This type should take a union type and extract types that extend a specified type.
- [x] Implement this functionality using TypeScript's conditional types.

### Hints

- You can use TypeScript's conditional types to check if a type extends another type.
- Consider how to handle cases where no types match the specified condition.

### Additional Notes

- Ensure that your solution works for various union types and conditions.
- Test your `MyExtract` type with different union types to verify its correctness.

### Example Test Cases

```ts
type Test1 = MyExtract<string | number | boolean, string>; // Test1 should be string
type Test2 = MyExtract<string | number | boolean, number>; // Test2 should be number
type Test3 = MyExtract<string | number | boolean, boolean>; // Test3 should be boolean
type Test4 = MyExtract<string | number | boolean, symbol>; // Test4 should be never
```

## Footnote

This TypeScript question and the README.md file were generated by ChatGPT.
