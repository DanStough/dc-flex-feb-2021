// const friendlyGreeting = "Hello";
// console.log(friendlyGreeting + " " + "World");

// const firstNumber = 23;
// let secondNumber = 19;
// const theAnswer = firstNumber + secondNumber;
// console.log("The answer is", theAnswer);

// secondNumber = 100;
// console.log("The answer is still", theAnswer);
// console.log("Even though the second number is now", secondNumber);
// const theAnswer = 23 +19;
// console.log(`The answer is ${theAnswer}! Isn't that wonderful?`)
// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add(234, 879));
// const friendInfo = {
//     name: "Alan Turing",
//     cell: "6017576",
//     birthday: "June 23"
// }
// const superhero = {
//     name: "Wonder Woman",
//     alias: "Diana Prince",
//     bracelets: 2,
//     lassos: 1
// }

// Updating an existing value
//superhero.alias = "Princess Diang of Themyscira"

// Equivalent
//superhero["alias"] = "Princess Diana of Themyscira"

// Adding a new value
// superhero.hometown = "Themyscira"

//let todoArray = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]
// const idx = todos.indexOf('go to the beach');
// console.log(idx)
// function printTodoCount(todoArray) {
//     const howMany = todoArray.length;
//     if (howMany === 0) {
//         console.log('All done!');
//     } else if (howMany === 1) {
//         console.log('You have 1 thing left to do.')
//     } else {
//         console.log(`You have ${howMany} left to do.`);
//     }
// }
// printTodoCount(todoArray);

function printGrades(percent){
    let wholeNumber = Math.floor(percent * 100);
    console.log(`Ted has ${wholeNumber}% in the class.`);
}
console.log("Test Cases 1")
printGrades(.90,"Ted");
printGrades(.666666, "Dan");

let betterPrintGrades = (percent, studentName) =>{
    let wholeNumber = Math.floor(percent * 100);
    console.log(`${studentName} has ${wholeNumber}% in the class`);
}

console.log("Test Cases 2")
printGrades(.90,"Ted");
printGrades(.666666, "Dan");

let students = ["Ted", "Dan", "Avery"];

function loopThruStudents(students,func){
    for(let i=0; i< students.length; i++){
        func(0.50, students[i]);
    }
}

console.log("\nTest Cases 3");