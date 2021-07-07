// console.log("hello world");

function reverseWord(word) {
  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var wordReversed = reverseArray.join("");
  return wordReversed;
}
// console.log(reverseWord("Alaska"));
module.exports = reverseWord;
