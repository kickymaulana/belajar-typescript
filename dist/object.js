"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Halo, nama saya ${this.name} dan saya berusia ${this.age} tahun`);
    }
}
const person1 = new Person("Fika", 25);
person1.introduce(); // Output: Halo, nama saya Fika dan saya berusia 25 tahun
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
}
const cat = new Animal("Kitty");
console.log(cat.name); // Output: Kitty
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
}
const myAccount = new BankAccount(1000);
// console.log(myAccount.balance); // Error: Property 'balance' is private
console.log(myAccount.getBalance()); // Output: 1000
class Vehicle {
    speed = 0;
    accelerate(amount) {
        this.speed += amount;
        console.log(`Kecepatan sekarang: ${this.speed} km/h`);
    }
}
class Car extends Vehicle {
    boost() {
        this.accelerate(50);
    }
}
const myCar = new Car();
myCar.boost(); // Output : Kecepatan sekarang: 50 km/h
class Employe {
    name;
    role;
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    work() {
        console.log(`${this.name} sedang mengelola tim`);
    }
}
class Manager extends Employe {
    manage() {
        console.log(`${this.name} sedang mengelola tim`);
    }
}
const emp1 = new Employe("Budi", "Developer");
emp1.work(); // Output: Budi bekerja sebagai developer
const manager1 = new Manager("Siti", "Manager");
manager1.work(); // Output: Siti bekerja sebagai manager
manager1.manage(); //Output: Siti sedang mengelola tim
//# sourceMappingURL=object.js.map