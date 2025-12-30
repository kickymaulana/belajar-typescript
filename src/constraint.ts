function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("TypeScript")); // Output: 10
console.log(getLength([1, 2, 3, 4])); // Output: 4

// console.log(getLength(100)); // Error: number tidak punya property length
