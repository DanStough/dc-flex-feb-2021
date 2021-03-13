//let, var, const

const myObj = {
  street: "123 Main st",
  zip: 12345,
}

myObj.contry = "US";

//  this doesn't work Obj is mutable but can't reassign when const
myObj = {
  street: "123 Main st",
  zip: 555,
}


function printGrades(percentStu) {
  let wholeNum = Math.round(percentStu * 100);
  console.log(`Ted has ${wholeNum}% in the class`);

}
printGrades(.98);
printGrades(.97777);

// anonymous function
let betterPrintGrades = (percent, studentName) => {
  let wholeNum = Math.round(percent * 100);
  console.log(`${studentName} has ${wholeNum}% in the class`);
}

betterPrintGrades(.6999, "Heggy");
// => Heggy has 70% in the class

let students = [
  {
    name: "Ted",
    percent: 0.9,
  }, 
  {
    name: "Dan",
    percent: 0.7,
  }, 
  {
    name: "Avery",
    percent: 0.4,
  },
];
undefined
function print(students, func) {
  for(let i= 0; i < students.length; i++){
    func(students[i].percent, students[i].name);
  }
}

console.log("\nTest Cases 3");
print(students, betterPrintGrades);

// map , find where to look for item, array function found the thing that you are looking for
let students = [1, 2, "Dan"];

console.log("\nTest Cases 5");

let greetingArray = students.map( item => {
  let greeting = `Hey student: ${item}`;
  console.log(greeting);
  
});

// map returns a new array, doesn't mutate the original array
let students = [1, 2, "Dan"];

console.log("\nTest Cases 5");

let greetingArray = students.map( item => {
  let greeting = `Hey student: ${item}`;
  console.log(greeting);
  // return a new array from .map()
  return greeting;
});

console.log(`\nmap new array: ${greetingArray}`);
console.log(`\nstudent original array: ${student}`);

/**
 * Test Cases 5
 Hey student: 1
 Hey student: 2
 Hey student: Dan

 map new array: Hey student: 1, Hey student: 2, Hey student: Dan
 student original array: 1,2,Dan
 *
 */
// How to define a variable
let student1 = "Luqmaan";
var student2 = "Ruben";
const student3 = "Teila";

// Constants
// This doesn't work, it's constant
// student3="Stephen";

console.log(student3);

const myObj = {
    street: "123 Main st",
    zip: 12345
};

// This doesn't work, another equal sign is bad 
// myObj = {
//     street: "Blerg St",
//     zip: 55555
// };

myObj.country = "US";   // This is fine!
console.log(myObj);

const myArray = [];
// myArray=[];             // Still bad for const

myArray.push("Hello"); // This is fine!
console.log(myArray);

// Let and Var

function helloWorld() {
    let hello = "hello";
    var world = "world";
}

// helloWorld() 
// console.log(hello);      // This won't work for either


var world = "world1";
let hello = "hello1"

// Code Block
{
    let hello = "hello2";   // Get's glued to the braces (aka Code Block)
    var world = "world2";   // Get's glued to a function (the global space)

    let answer = hello + world
    console.log(answer);
}

console.log(hello + world); 
