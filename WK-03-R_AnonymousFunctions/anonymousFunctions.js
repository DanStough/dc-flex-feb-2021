
// Old School
function printGrades(percent, studentName){
    let wholeNumber = Math.floor(percent * 100);
    console.log(`${studentName} has ${wholeNumber}% in the class.`);
}
console.log("Test Cases 1")
printGrades(.90, "Ted");
printGrades(.6666666, "Dan");

// "Fat" Arrow Functions
let betterPrintGrades = (percent, studentName) => {
    let wholeNumber = Math.floor(percent * 100);
    console.log(`${studentName} has ${wholeNumber}% in the class!!!`);
}

console.log("Test Cases 2")
betterPrintGrades(.90, "Ted");
betterPrintGrades(.6666666, "Dan");

let students = ["Ted", "Dan", "Avery"];

// Func is a placeholder for a function
function loopThroughStudents(students, func){
    for(let i=0; i < students.length; i++){
        func(0.50, students[i]);                // The Placeholder is called
    }
}

console.log("\nTest Cases 3")
loopThroughStudents(students, betterPrintGrades); // Pass a function into another function


students = [1, 2, "Dan"];

// How to use a map with Named Functions
let printName = (studentName) => {
    console.log(`Hey Student: ${studentName}`);
    console.log(`*****`);
}

console.log("\nTest Cases 4")   // Map loops over an  array
students.map(printName);        // Pass a function into another function, but using map

// Using a function w/o defining a variable - anonymous
console.log("\nTest Cases 5") 
let greetingArray = students.map( (laurel, hardy) => {
    let greeting = `Hey Student: ${laurel}, ${hardy}`;
    console.log(greeting);
    return greeting;
})

console.log(students);
console.log(greetingArray);
