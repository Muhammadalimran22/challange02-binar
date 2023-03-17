function getAngkaTerbesarKedua(personName) {
  if (!Array.isArray(personName) || personName.length < 2) {
    return "err";
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

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));

console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
/* karena kedua baris kode tersebut akan mengalami error karena tidak ada parameter yang diisi pada fungsi getAngkaTerbesarKedua(). fungsi tersebut membutuhkan minimal dua parameter berupa angka yang akan dibandingkan. tanpa parameter, tidak akan ada nilai yang bisa dibandingkan, sehingga akan terjadi error. */
