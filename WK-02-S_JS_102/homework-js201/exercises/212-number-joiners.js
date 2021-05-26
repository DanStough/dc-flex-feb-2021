// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile (startNum, endNum) {
  /**
   * 1. count down from starNum to endNum
   * 2. join together using "_"
   */
   let holdingPot = '';
   let n = startNum; 
   while (n <= endNum) {
     if (startNum === endNum) {
       return startNum.toString();
     }
     if (n === endNum) {
      return holdingPot += n.toString();
     }
     let addUnderScore = n.toString() + '_';
     holdingPot += addUnderScore;
     n++;
   }
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
function numberJoinerFor (startNum, endNum) {
  let holdingPot = '';
  let n = startNum; 
  for (let i = startNum; i <= endNum; i++) {
    if (startNum === endNum) {
      return startNum.toString();
    }
    if (n === endNum) {
     return holdingPot += n.toString();
    }
    let addUnderScore = n.toString() + '_';
    holdingPot += addUnderScore;
    n++;
  }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
function numberJoinerFancy (startNum, endNum, separator) {
  let holdingPot = '';
  let n = startNum;
  let addUnderScore = '';
  for (let i = startNum; i <= endNum; i++) {
    if (startNum === endNum) {
      return startNum.toString();
    }
    if (n === endNum) {
     return holdingPot += n.toString();
    }
    if (separator) {
      addUnderScore = n.toString() + separator;
    } else {
      addUnderScore = n.toString() + '_';
    }
    holdingPot += addUnderScore;
    n++;
  }
}