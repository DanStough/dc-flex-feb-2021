// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Complete the removeZAnimals function as described below:

function removeZAnimals () {
  // 1) declare an array with some strings
  const animals = ["alligator", "zebra", "crocodile", "giraffe"]

  // create an empty array (we will fill this with strings from the previous array)
  let animalsWithoutZ = []

  // 2) loop through "animals"
  for(let i = 0; i< animals.length; i++){
    // 3) add every item in "animals" to "animalsWithoutZ" unless the animal name
    //    contains the letter "z"
    //    HINT: remember you can search within a string
    if(animals[i].search('z') === -1){
      animalsWithoutZ.push(animals[i]);
    }
  }
  // 4) return "animalsWithoutZ"
  return animalsWithoutZ;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeAnyWordWithZ" that takes 1 argument: an array of strings
// It should return a new array that has all of the items in the passed-in array minus
// any words that contain the letter 'z' or 'Z' (case-insensitive)
function removeAnyWordWithZ(arr){
  let arrayWithoutZ = [];
  for(let i =0; i<arr.length; i++){
    if(arr[i].search('z') === -1 && arr[i].search('Z')=== -1){
      arrayWithoutZ.push(arr[i]);
    }
  }
  return arrayWithoutZ;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "removeWordsWithChar" that takes 2 arguments:
// 1) an array of strings
// 2) a string of length 1 (ie: a single character)
// It should return a new array that has all of the items in the first argument
// except those that contain a character in the second argument (case-insensitive).
//
// Examples:
// removeWordsWithChar(['aaa', 'bbb', 'ccc'], 'b') --> ['aaa', 'ccc']
// removeWordsWithChar(['pizza', 'beer', 'cheese'], 'E') --> ['pizza']
function removeWordsWithChar(arr, letter){
  if(letter.length === 1){    //tests if we are accepting a single character
      let arrayWithoutChar = [];
    for(let i =0; i<arr.length; i++){
      if(arr[i].search(letter.toUpperCase()) === -1 && arr[i].search(letter.toLowerCase())=== -1){
        arrayWithoutChar.push(arr[i]);
      }
    }
    return arrayWithoutChar;
  }
  else{
    return `You have entered an invalid character. Please try again.`;
  }
}