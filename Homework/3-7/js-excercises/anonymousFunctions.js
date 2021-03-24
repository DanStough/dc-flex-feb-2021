

function printGrades(percent, studentName) {
    let wholeNumber = Math.floor(percent * 100);
    console.log(`${studentName} has ${wholeNumber} in the class`);
}

console.log("Test Cases 1")
printGrades(.90, "Philip");
printGrades(.66, "Taylor");

let betterPrintGrades = (percent, studentName) => {
    let wholeNumber = Math.floor(percent * 100);
    console.log(`${studentName} has ${wholeNumber} in the class`);
}

console.log("Test Cases 2")
printGrades(.90, "Philip");
printGrades(.66, "Taylor");

let students = ["Philip", "Taylor", "Destiny"];

function print(students, func){ //This function will loop through the students
    for(let i=0; i < students.length; i++) {
        func(0.50, students[i]);
    }
}

console.log("\nTest Cases 3")
print(students, printGrades);

let printName = (studentName) => {
    console.log(`Hey Student: ${studentName}`);
    console.log(`*****`);
}

console.log("\nTest Case 4"); // .map loops over an array
students.map(printName); // pass a function through another function, but using map

console.log("\nTest Cases 5")
let greetingArray = students.map((studentName) => {
    let greeting = `Hey Student: ${studentName}`;
    console.log(`Hey Student: ${studentName}`);
    console.log(`*****`);
    return greeting;
})

console.log(students);
console.log(greetingArray);