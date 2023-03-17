const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduct: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStock: 20,
  },
  {
    idProduct: "BOOK002351",
    namaProduct: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStock: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStock: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduct: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStock: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  /* let infoPenjualan = {};

   dataPenjualan.forEach((product) => {
     infoPenjualan[product.idProduct] = {
       namaProduct: product.namaProduct,
       penulis: product.penulis,
       hargaBeli: product.hargaBeli,
       hargaJual: product.hargaJual,
       totalTerjual: product.totalTerjual,
       sisaStock: product.sisaStock,
     };
   });

   return infoPenjualan; */
  let totalKeuntungan = 0;
  let totalModal = 0;

  for (let i = 0; i < dataPenjualan.length; i++) {
    let keuntungan =
      (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) *
      dataPenjualan[i].totalTerjual;
    totalKeuntungan += keuntungan;

    let modal = dataPenjualan[i].hargaBeli * dataPenjualan[i].totalTerjual;
    totalModal += modal;
  }

  const formatRupiah = (angka) => {
    const rupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);

    return rupiah;
  };

  return {
    namaProductTerlaris: dataPenjualan[0].namaProduct, // nama product yang paling banyak terjual dari array of object diatas adalah Pulang - Pergi
    penulisTerlaris: dataPenjualan[0].penulis, // penulis yang bukunya paling banyak di jual adalah Tere Liye
    persentaseKeuntungan: `${Math.round(
      (totalKeuntungan / totalModal) * 100
    )}%`, // Persentase keuntungan berdasarkan totalMOdal dan totalJual adalah sekitar 150%
    totalKeuntungan: formatRupiah(totalKeuntungan), // Nilai yang dihasilkan harus dalam berupa format Rupiah, contoh totaLKeuntungan 14650000 di jadikan format Rupiah menjadi 'Rp. 14.650.000'
    totalModal: formatRupiah(totalModal), // Nilai yang dihasil
  };
}
/* EXPECTED RESULT 
  Ketika fuction tersebut dipanggil dengan variabel dataPenjualanPakAldi
*/

console.log(getInfoPenjualan(dataPenjualanNovel));
/* EXPECTED OUTPUT ==> OBJECT dengan format seperti yang disebutkan diatas */
