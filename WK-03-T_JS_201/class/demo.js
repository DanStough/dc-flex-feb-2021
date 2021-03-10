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