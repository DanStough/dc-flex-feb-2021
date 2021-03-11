// Advanced Math Concepts

// Modulo (a.k.a. Remainder) helps if number is odd or even number
let remainder = 3%2;
remainder = 10%4;
remainder = -5%2;

function isEven(num) {
  return num%2 === 0;
}

console.log(isEven(10));

// Integer Division
remainder = -10%3; 
let divide = 10/9;

console.log(divide);

let wholeNumber = Math.round(divide); 

Math.ceil(divide) // always go up
Math.down(divide) // always go down

Math.random() // num between [0, 1) 

// write a func a random num betwn 0-10
function classRandom() {
  let myRandom = Math.random(); // num between [0, 1) 
  return Math.floor(11 * myRandom);
}
// Advanced Math Concepts 

// Modulo (a.k.a Remainder)
let remainder = 3%2;    // remainder = 1
remainder = 10%4;       // remainder = 2
remainder = -5%2;       // remainder = 2

function isEven(num) {
    return num%2 === 0;
}

// console.log(isEven(13));

// Integer Division 
remainder = -10%3;       // remainder = 1
let divide = 10/3;       // This is 3.333333

let wholeNumber = Math.ceil(divide);   // This should be 3

// console.log(wholeNumber);

// Random Number

// console.log( Math.random() );

// Write a function that gives a random number between 0-10
function classRandom(){
    let myRandom = Math.random();   // our number between 0-1
    return Math.floor(11 * myRandom);
}

console.log(classRandom());

