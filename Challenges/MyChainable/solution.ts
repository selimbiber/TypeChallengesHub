interface MyChainable {
  setName(name: string): this;
  setAge(age: number): this;
  build(): { name: string; age: number };
}

class PersonBuilder implements MyChainable {
  private name: string = "";
  private age: number = 0;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  build(): { name: string; age: number } {
    return {
      name: this.name,
      age: this.age,
    };
  }
}

// Test 1: Set name and age, then build
const person1 = new PersonBuilder().setName("Ali").setAge(30).build();

console.assert(person1.name === "Ali", 'Test 1 Failed: Name should be "Ali"');
console.assert(person1.age === 30, "Test 1 Failed: Age should be 30");
console.log("Test 1 Passed");

// Test 2: Set only name, then build
const person2 = new PersonBuilder().setName("Ayşe").build();

console.assert(person2.name === "Ayşe", 'Test 2 Failed: Name should be "Ayşe"');
console.assert(person2.age === 0, "Test 2 Failed: Age should be 0 (default)");
console.log("Test 2 Passed");

// Test 3: Set only age, then build
const person3 = new PersonBuilder().setAge(25).build();

console.assert(person3.name === "", "Test 3 Failed: Name should be empty (default)");
console.assert(person3.age === 25, "Test 3 Failed: Age should be 25");
console.log("Test 3 Passed");

// Test 4: Chain methods in different order
const person4 = new PersonBuilder().setAge(40).setName("Mehmet").build();

console.assert(person4.name === "Mehmet", 'Test 4 Failed: Name should be "Mehmet"');
console.assert(person4.age === 40, "Test 4 Failed: Age should be 40");
console.log("Test 4 Passed");

// Test 5: Create a person with empty name and age
const person5 = new PersonBuilder().build();

console.assert(person5.name === "", "Test 5 Failed: Name should be empty (default)");
console.assert(person5.age === 0, "Test 5 Failed: Age should be 0 (default)");
console.log("Test 5 Passed");
