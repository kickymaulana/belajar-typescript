function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirst<string>(["Apple", "Banana"])); // Output: Apple
console.log(getFirst<number>([10, 20, 30])); // Output: 10

interface Pair<T, U> {
  first: T;
  second: U;
}

const angka: Pair<number, string> = { first: 1, second: "Satu" };
const koordinat: Pair<number, number> = { first: 10, second: 20 };

console.log(angka); // Output { first: 1, second : 'satu'}
console.log(koordinat); // Output { first: 10, second: 20}
