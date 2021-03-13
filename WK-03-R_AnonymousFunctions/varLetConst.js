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