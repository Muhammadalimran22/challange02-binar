function isValidPassword(email) {
  if (typeof email !== "string") {
    return "err";
  } else if (email.length < 8 || !/[A-Z]/.test(email)) {
    return false;
  } else {
    return true;
  }
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));

console.log(isValidPassword(0));
console.log(isValidPassword());
/* Karena kedua pemanggilan fungsi isValidPassword tidak memberikan argumen apapun atau argumen yang diberikan tidak sesuai dengan yang diharapkan oleh fungsi. Perlu diingat bahwa fungsi isValidPassword memerlukan dua buah argumen, yaitu password dan username. Jika kedua argumen tersebut tidak diberikan atau tidak valid, maka fungsi isValidPassword akan menghasilkan nilai err. */
