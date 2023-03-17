const { checkTypeNumber } = require("./soal2");
function checkEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)*$/;
  if (regex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(
  checkEmail("apranata")
); /* Karena dalam kode yang diberikan, terdapat pemanggilan fungsi "checkEmail" dengan parameter "apranata". Namun, tidak ada implementasi untuk fungsi "checkEmail" itu sendiri dalam kode yang diberikan. */
console.log(
  checkTypeNumber(checkEmail(3322))
); /* Karena pemanggilan fungsi `checkTypeNumber(3322)` yang berisi bilangan bulat sebagai argumen pada fungsi `checkEmail` juga menimbulkan error karena tidak sesuai dengan parameter yang diharapkan, yang seharusnya adalah string yang berisi Email. */
console.log(
  checkEmail()
); /* Karena fungsi checkEmail() membutuhkan input atau parameter yang harus diberikan ketika fungsi dipanggil, namun tidak ada input atau parameter yang diberikan sehingga terjadi error.*/
