function reverseWord(word) {
  var splitString = word.split("");
  var reverseArray = splitString.reverse();
  var wordReversed = reverseArray.join("");
  return wordReversed;
}

module.exports = reverseWord;
