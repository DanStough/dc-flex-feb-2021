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
