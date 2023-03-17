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

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(
  checkTypeNumber()
); /* OUTPUT yg keluar => 'err: bro where is the parameter?' */
