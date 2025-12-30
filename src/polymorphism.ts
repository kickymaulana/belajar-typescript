class Animal {
  makeSound(): void {
    console.log("Hewan mengeluarkan suara...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Guk guk!");
  }
}

const animal = new Animal();
animal.makeSound(); // Output: Hewan mengeluarkan suara...

const dog = new Dog();
dog.makeSound(); // Output: Guk guk!
