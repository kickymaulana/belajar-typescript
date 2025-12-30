"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    makeSound() {
        console.log("Hewan mengeluarkan suara...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Guk guk!");
    }
}
const animal = new Animal();
animal.makeSound(); // Output: Hewan mengeluarkan suara...
const dog = new Dog();
dog.makeSound(); // Output: Guk guk!
//# sourceMappingURL=polymorphism.js.map