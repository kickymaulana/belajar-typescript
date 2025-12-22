"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function tambah(a, b) {
    return a + b;
}
console.log(tambah(5, 3)); //output: 8
function sapa(nama) {
    console.log(`Halo, ${nama}!`);
}
sapa("Andi"); // Output: Halo, Andi!
function sapaUser(nama = "User") {
    console.log(`Halo, ${nama}!`);
}
sapaUser(); // Output: Halo, User!
sapaUser("Budi"); //Output: Halo, Budi!
function perkenalan(nama, umur) {
    if (umur) {
        console.log(`Halo, nama saya ${nama} dan saya berusia ${umur} tahun`);
    }
    else {
        console.log(`Halo, nama saya ${nama}`);
    }
}
perkenalan("Fika", 22); // Output: Halo, nama saya Fika dan saya berusia 22 tahun
perkenalan("Fila"); //Output: Halo, nama saya fika
function jumlahkan(...angka) {
    return angka.reduce((total, num) => total + num, 0);
}
console.log(jumlahkan(1, 2, 3, 4, 5)); // Ouput: 15
console.log(jumlahkan(10, 20)); //Output: 30
//# sourceMappingURL=function.js.map