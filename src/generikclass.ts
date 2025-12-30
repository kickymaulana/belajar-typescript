class Storage<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const textStorage = new Storage<string>();
textStorage.add("Hello");
textStorage.add("World");
console.log(textStorage.getAll()); // Output : ['hello', 'world']

const numberStorage = new Storage<number>();
numberStorage.add(100);
numberStorage.add(200);
console.log(numberStorage.getAll()); // Output : [100, 200]
