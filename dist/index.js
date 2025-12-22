"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("hello dunia");
let nama = "Fika Ridaul Malayya";
let umur = 25;
let aktif = true;
let namaLengkap = "Fika Ridaul Malayya";
let tinggi = 175.5;
let tahunLahir = 1998;
let sudahMenikah = false;
let data = "Bisa string";
data = 123;
let angka = [1, 2, 3, 4, 5];
let kata = ["satu", "dua", "tiga"];
let mahasiswa = ["Budy", 21];
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let peran = Role.Admin;
function hello(nama) {
    console.log(`Halo, ${nama}!`);
}
hello("Fika"); //Output: Halo, Fika!
let kosong = null;
let tidakTerdefinisi = undefined;
function errorMessage(message) {
    throw new Error(message);
}
let user = { nama: "Fika", umur: 25 };
let kota = "Jakarta"; // Typescript akan menanggap ini sebagai string
// kota = 123;
const API_URL = "https://api.santrikoding.com";
//# sourceMappingURL=index.js.map