"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "Fika",
    age: 25,
    isAdmin: true,
};
console.log(user1.name);
const product1 = {
    name: "Laptop",
    price: 15000000,
};
console.log(product1.description);
const person1 = {
    name: "Fika",
    greet() {
        return `Halo, saya ${this.name}`;
    },
};
console.log(person1.greet()); //Output: Halo, saya Fika
const cat = {
    name: "Milo",
    age: 2,
};
let userId;
userId = 123; // Valid
userId = "abc123"; // Valid
const add = (x, y) => x + y;
console.log(add(10, 5)); // Output: 15
//# sourceMappingURL=interface.js.map