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
/* output => 'true' */
console.log(isValidPassword("meong2021"));
/* output => 'false' karena ga mempunyai huruf besar*/
console.log(isValidPassword("@eong"));
/* output => 'false' karena ga mempunyai angka dan terdiri 5 huruf*/
console.log(isValidPassword("Meong2"));
/* output => 'false' karena hanya 6 huruf*/
console.log(isValidPassword(0));
/* output => 'err' why err? */
console.log(isValidPassword());
/* output => 'err' why err? */
