enum Role {
  Admin, // 0
  User, // 1
  Guest, // 2
}

let userRole: Role = Role.Admin;
console.log(userRole);
console.log(Role.User);

enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

console.log(Status.Success); // Output: 200
console.log(Status["NotFound"]); // Output: 404

enum PaymentStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED",
}

let statusTransaksi: PaymentStatus = PaymentStatus.Success;
console.log(statusTransaksi); // Output SUCCESS

let user: [string, number];

user = ["Fika", 25]; // Valid
// user = [25, "Fika"]; // Error: tipe tidak sesuai

console.log(user[0]); // Output : Fika
console.log(user[1]); // Output : 25

let person: [string, number] = ["Fika", 30];

let [nama, umur] = person;
console.log(nama); // Output: Fika
console.log(umur); // Output: 30

let mahasiswa: [string, number, string?];

mahasiswa = ["Budi", 21]; // Valid
mahasiswa = ["Budi", 21, "Teknik Informatika"]; //Output : valid
// mahasiswa = [21, "Budi"]; // error

let colors: [number, ...string[]];
colors = [1, "red", "green", "blue"];
console.log(colors); // Output : [1, 'red', 'green', 'blue']
