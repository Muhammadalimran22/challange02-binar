function changeWord(selectedText, changedText, text) {
  const newKalimat = text.replace(selectedText, changedText);
  return newKalimat;
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku kepadamu";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("bromo", "sameru", kalimat2));
