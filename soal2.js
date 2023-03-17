function checkTypeNumber(givenNumber) {
  if (typeof givenNumber === "undefined") {
    return "err: bro where is the parameter?";
  } else if (typeof givenNumber === "number") {
    if (givenNumber % 2 === 0) {
      return "GENAP";
    } else {
      return "GANJIL";
    }
  } else {
    return "err: invalid data type";
  }
}

/* EXPECTED RESULT */
/* Ketika fuction tersebut dipanggil */
console.log(checkTypeNumber(10)); /* OUTPUT yg keluar => 'GENAP' */
console.log(checkTypeNumber(3)); /* OUTPUT yg keluar => 'GANJIL' */
console.log(
  checkTypeNumber("3")
); /* OUTPUT yg keluar => 'err: invalid data type' */
console.log(
  checkTypeNumber({})
); /* OUTPUT yg keluar => 'err: invalid data type' */
console.log(
  checkTypeNumber([])
); /* OUTPUT yg keluar => 'err: invalid data type' */
console.log(
  checkTypeNumber()
); /* OUTPUT yg keluar => 'err: bro where is the parameter?' */
