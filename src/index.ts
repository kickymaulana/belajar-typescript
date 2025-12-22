console.log("hello dunia");

let nama: string = "Fika Ridaul Malayya";
let umur: number = 25;
let aktif: boolean = true;

let namaLengkap: string = "Fika Ridaul Malayya";
let tinggi: number = 175.5;
let tahunLahir: number = 1998;
let sudahMenikah: boolean = false;

let data: any = "Bisa string";
data = 123;

let angka: number[] = [1, 2, 3, 4, 5];
let kata: string[] = ["satu", "dua", "tiga"];

let mahasiswa: [string, number] = ["Budy", 21];

enum Role {
  Admin,
  User,
  Guest,
}

let peran: Role = Role.Admin;

function hello(nama: String): void {
  console.log(`Halo, ${nama}!`);
}

hello("Fika"); //Output: Halo, Fika!

let kosong: null = null;
let tidakTerdefinisi: undefined = undefined;

function errorMessage(message: string): never {
  throw new Error(message);
}

let user: object = { nama: "Fika", umur: 25 };

let kota = "Jakarta"; // Typescript akan menanggap ini sebagai string
// kota = 123;

const API_URL: string = "https://api.santrikoding.com";
