// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'

function fizzbuzz (num) {
  let holdingPot = '';
  for (let i = 1; i <= num; i++) {
    // if num is not multiple of 3 or 5 then add a period
    if (i % 3 === 0 && i % 5 === 0) {
      holdingPot += 'fizzbuzz';
    } else if (i % 3 === 0) {
      holdingPot += 'fizz';
    } else if (i % 5 === 0) {
      holdingPot += 'buzz';
    } else {
      holdingPot += '.';
    }
  }
  return holdingPot;
}
