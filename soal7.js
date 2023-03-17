const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalPenjualan: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalPenjualan: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalPenjualan: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalPenjualan: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {
  let totalPenjualan = 0;
  dataPenjualan.forEach((item) => {
    totalPenjualan += item.totalPenjualan;
  });

  return totalPenjualan;
  /*   let total = 0;
  for (let i = 0; i < dataPenjualan.length; i++) {
    total += dataPenjualan[i].totalPenjualan;
  }

  return total; */
}

/* EXPECTED RESULT
  Keika fuction tersebut dipanggil dengan variael dataPenjualan
*/
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));

/* EXPECTED OUTPUT ==> 37 
  307 dari mana? dari setiap value property 'totalTerjual', yaitu 90 + 37 + 90 + 90
*/
