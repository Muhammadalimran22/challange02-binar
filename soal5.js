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
/* output => {firstname 'aldi', middlename 'daniela', lastname 'pranata'}*/
console.log(getSplitName("Dwi Kuncoro"));
/* ooutput => {firstname 'dwi', middlename 'null', lastname 'kuncoro'} */
console.log(getSplitName("Aurora"));
/* output => {firstname 'aurora', middlename 'null', 'null'} */
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
/* err this is only 3 characters name */
console.log(getSplitName(0));
/* 'err' why err? */
