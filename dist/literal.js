"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arah;
arah = "kiri"; // benar
arah = "kanan"; // benar
// arah = "maju"; // error : "maju" bukan bagian dari tipe yang diizinkan
let kodeStatus;
kodeStatus = 200; // benar
// kodeStatus = 300; // Error: 300 tidak diizinkan
let isActive;
isActive = true;
function akses(role) {
    if (role === "admin") {
        console.log("Akses penuh diberikan.");
    }
    else if (role == "user") {
        console.log("Akses terbatas");
    }
    else {
        console.log("tidak ada akses");
    }
}
akses("admin"); // output: akses penuh diberikan
akses("guest"); // output: tidak ada akses
// akses("moderator"); //error: "moderator tidak diizinkan";
function setMode(mode) {
    console.log(`Mode diatur ke ${mode}`);
}
setMode("light"); // Ooutput: mode di atur ke lihgt
// setMode("blue"); // Output: Error "blue" bukan nilai yang diperbolehkan
//# sourceMappingURL=literal.js.map