type MyInstanceType<T> = T extends new (...args: any[]) => infer R ? R : never;

class ExampleClass {
  constructor(public id: number, public name: string) {}
}

type Result53 = MyInstanceType<typeof ExampleClass>;
class TestClass {
  constructor(public a: number, public b: string) {}
}

type Test112 = MyInstanceType<typeof TestClass>;

class AnotherClass {
  constructor(public x: boolean) {}
}

type Test211 = MyInstanceType<typeof AnotherClass>;

type Test313 = MyInstanceType<() => void>;
