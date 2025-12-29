"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userRole);
console.log(Role.User);
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["ServerError"] = 500] = "ServerError";
})(Status || (Status = {}));
console.log(Status.Success); // Output: 200
console.log(Status["NotFound"]); // Output: 404
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Success"] = "SUCCESS";
    PaymentStatus["Failed"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
let statusTransaksi = PaymentStatus.Success;
console.log(statusTransaksi); // Output SUCCESS
let user;
user = ["Fika", 25]; // Valid
// user = [25, "Fika"]; // Error: tipe tidak sesuai
console.log(user[0]); // Output : Fika
console.log(user[1]); // Output : 25
let person = ["Fika", 30];
let [nama, umur] = person;
console.log(nama); // Output: Fika
console.log(umur); // Output: 30
let mahasiswa;
mahasiswa = ["Budi", 21]; // Valid
mahasiswa = ["Budi", 21, "Teknik Informatika"]; //Output : valid
// mahasiswa = [21, "Budi"]; // error
let colors;
colors = [1, "red", "green", "blue"];
console.log(colors); // Output : [1, 'red', 'green', 'blue']
//# sourceMappingURL=enum.js.map