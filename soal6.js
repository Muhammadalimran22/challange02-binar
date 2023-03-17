function getAngkaTerbesarKedua(personName) {
  if (!Array.isArray(personName) || personName.length < 2) {
    return "Error";
  }

  let angkaTerbesar = personName[0];
  let angkaKeduaTerbesar = personName[1];

  for (let i = 0; i < personName.length; i++) {
    if (personName[i] > angkaTerbesar) {
      angkaKeduaTerbesar = angkaTerbesar;
      angkaTerbesar = personName[i];
    } else if (
      personName[i] > angkaKeduaTerbesar &&
      personName[i] !== angkaTerbesar
    ) {
      angkaKeduaTerbesar = personName[i];
    }
  }

  return angkaKeduaTerbesar;
}

/* EXPECTED RESULT
  Ketika Fuction tersebut dipanggil
*/
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
/* EXPECTED RESULT
  8
*/
console.log(getAngkaTerbesarKedua(0)); //Error
console.log(getAngkaTerbesarKedua()); //Error
