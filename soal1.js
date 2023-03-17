function changeWord(selectedText, changedText, text) {
  const regex = new RegExp(selectedText, "g");
  return text.replace(regex, changedText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku kepadamu";

/* EXPECTED RESULT
Ketika fuction tersebut dipanggil dengan variabel kalimat1 */
console.log(changeWord("mencintai", "membenci", kalimat1));
/* Maka output harus keluar adalah */
/* => 'Andini sangat membenci kamu selamanya' */

/* Ketika fuction tersebut dipanggil dengan variabel kalimat2 */
console.log(changeWord("bromo", "sameru", kalimat2));
/* Maka output yang harus keluar adalah */
/* => 'Gunung sameru tak akan mampu menggambarkan besarnya cintaku padamu' */
