// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"
 function reverse(words){
     let sdrow =''; // words backward
     for(let i = 0; i<=words.length; i++){
        sdrow += words.charAt(words.length-i);
     }
     return sdrow;
 }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
function findLongestWord(sentence){
    let arr = sentence.split(' ');
    let longest = '';
    for(let i =0; i<arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i];
        }
    }
    return longest;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(sentence){
    let forbiddenWords = ['heck', 'darn', 'dang', 'crappy'];
    let sentArray = sentence.split(' ');
    let loop = sentArray.length;
    for(let i = 0; i < loop; i++){
        for(let j=0; j<forbiddenWords.length; j++){
            if(sentArray[i] === forbiddenWords[j]){
                sentArray.splice(i,1);
            }
        }
    }
    return sentArray.join(' ');
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(sentence){
   let words = sentence.split(' ');
   for(let i =0; i<words.length;i++){
       words[i] = words[i][0].toUpperCase() + words[i].substr(1);
   }
   return words.join(' ');
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
function split(jumble, symbol){
    return jumble.split(symbol); // uses the split function will need source code
}