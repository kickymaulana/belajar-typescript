"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    data = [];
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
}
const textStorage = new Storage();
textStorage.add("Hello");
textStorage.add("World");
console.log(textStorage.getAll()); // Output : ['hello', 'world']
const numberStorage = new Storage();
numberStorage.add(100);
numberStorage.add(200);
console.log(numberStorage.getAll()); // Output : [100, 200]
//# sourceMappingURL=generikclass.js.map