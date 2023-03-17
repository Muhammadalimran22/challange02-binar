function checkEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9]{0,61}[a-zA-Z0-9])?)*$/;
  if (regex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

/* EXPECTED RESULT */
/* Ketika fuction tersebut dipanggil */
console.log(
  checkEmail("apranata@binar.co.id")
); /* output yg keluar =>'VALID' */
console.log(checkEmail("apranata@binar.com")); /* output yg keluar =>'VALID' */
console.log(checkEmail("apranata@binar")); /* output yg keluar =>'INVALID' */
console.log(
  checkEmail("apranata")
); /* err: menjelaskan penyebab err nya kenapa */
/* console.log(
  checkEmail(checkTypeNumber(3322))
); */ /* err: menjelaskan penyabab err nya kenapa */
console.log(checkEmail()); /* err: menjelaskan penyebab err nya kenapa */
