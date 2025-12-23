interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const user1: User = {
  name: "Fika",
  age: 25,
  isAdmin: true,
};

console.log(user1.name);

interface Product {
  name: string;
  price: number;
  description?: string;
}

const product1: Product = {
  name: "Laptop",
  price: 15000000,
};

console.log(product1.description);

interface Person {
  name: string;
  greet(): string;
}

const person1: Person = {
  name: "Fika",
  greet() {
    return `Halo, saya ${this.name}`;
  },
};

console.log(person1.greet()); //Output: Halo, saya Fika

type Animal = {
  name: string;
  age: number;
};

const cat: Animal = {
  name: "Milo",
  age: 2,
};

type ID = string | number;

let userId: ID;
userId = 123; // Valid
userId = "abc123"; // Valid
// userId = true; // Error: boolean tidak sesuai dengan ID

type Add = (a: number, b: number) => number;

const add: Add = (x, y) => x + y;

console.log(add(10, 5)); // Output: 15
