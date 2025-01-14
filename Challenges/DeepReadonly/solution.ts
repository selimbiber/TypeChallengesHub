type User = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

const user: DeepReadonly<User> = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

user.name = "Doe"; // Cannot assign to name because it is a read-only property.
user.address.city = "Los Angeles"; // Cannot assign to city because it is a read-only property.
