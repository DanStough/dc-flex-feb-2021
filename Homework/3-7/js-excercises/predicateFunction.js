// Write a predicate function that returns true or false
// function isUserLoggedIn() {
//     let user = `loggedOut`;
//     user !== `loggedOut`;
//     return false;
// }
// console.log(isUserLoggedIn());

// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.

// function isVowel() {
//     const vowel = ['a', 'e', 'i', 'o', 'u'];
//     let userInput = 'a';
//     // if (vowel !== userInput);
//     return false;
//     if (vowel !== userInput);
// }
// console.log(isVowel());

// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.


// function isEven(num) {
//     return num%2 === 0;
// }
// console.log(isEven(12))

// function isOdd(num) {
//     return num%2 === 1;
// }
// console.log(isOdd(69))


// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.

// function isCapitalCity(city, state) {
//     let cityState = [
//         {
//             stateCity: `Austin, Texas`
//         },
//         {
//             stateCity: `Houston, Texas`
//         }
//     ]
// }






let stateCapital = {
    Alabama: 'Montgomery',
    Alaska: 'Juneau',
    Arizona: 'Phoenix',
    Arkansas: 'Little Rock',
    California: 'Sacramento',
    Colorado: 'Denver',
    Connecticut: 'Hartford',
    Delaware: 'Dover',
    Florida: 'Tallahassee',
    Georgia: 'Atlanta',
    Hawaii: 'Honolulu',
    Idaho: 'Boise',
    Illinois: 'Springfield',
    Indiana: 'Indianapolis',
    Iowa: 'Des Moines',
    Kansas: 'Topeka',
    Kentucky: 'Frankfort',
    Louisiana: 'Baton Rouge',
    Maine: 'Augusta',
    Maryland: 'Annapolis',
    Massachusetts: 'Boston',
    Michigan: 'Lansing',
    Minnesota: 'Saint Paul',
    Mississippi: 'Jackson',
    Missouri: 'Jefferson City',
    Montana: 'Helena',
    Nebraska: 'Lincoln',
    Nevada: 'Carson City',
    'New Hampshire': 'Concord',
    'New Jersey': 'Trenton',
    'New Mexico': 'Santa Fe',
    'New York': 'Albany',
    'North Carolina': 'Raleigh',
    'North Dakota': 'Bismarck',
    Ohio: 'Columbus',
    Oklahoma: 'Oklahoma City',
    Oregon: 'Salem',
    Pennsylvania: 'Harrisburg',
    'Rhode Island': 'Providence',
    'South Carolina': 'Columbia',
    'South Dakota': 'Pierre',
    Tennessee: 'Nashville',
    Texas: 'Austin',
    Utah: 'Salt Lake City',
    Vermont: 'Montpelier',
    Virginia: 'Richmond',
    Washington: 'Olympia',
    'West Virginia': 'Charleston',
    Wisconsin: 'Madison',
    Wyoming: 'Cheyenne'
  };

//   function isCapitalCity(city, state) {
//     let cityState = [
//         {
//             stateCity: `Austin, Texas`
//         },
//         {
//             stateCity: `Houston, Texas`
//         }
//     ]
// }

function isCapitolCity(city, state) {
  return cityState[state] === city;
}

  let startingArray = {}

  for(let i=0; i < startingArray.find; i++) {
      stateCapital[startingArray[i].stateCapital] = startArray[i].city; 
  }

//   console.log(states)

  function lookUp(stateCapital) {
    //   return startArray.length;
  }

  console.log(lookUp("Georgia"());