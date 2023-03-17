function getSplitName(personName) {
  if (typeof personName !== "string") {
    return "err";
  }

  const nameArray = personName.split(" ");

  if (nameArray.length === 3) {
    return {
      firstname: nameArray[0],
      middlename: nameArray[1],
      lastname: nameArray[2],
    };
  } else if (nameArray.length === 2) {
    return {
      firstname: nameArray[0],
      middlename: null,
      lastname: nameArray[1],
    };
  } else if (nameArray.length === 1) {
    return { firstname: nameArray[0], middlename: null, lastname: null };
  } else {
    return "err";
  }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));

console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
/* Karena pada pemanggilan fungsi getSplitName("Aurora Aureliya Sukma Darma"), tidak terdapat deklarasi fungsi getSplitName sebelumnya Dan pada pemanggilan fungsi getSplitName(0), parameter yang dimasukkan bukan berupa string, melainkan angka 0. */
