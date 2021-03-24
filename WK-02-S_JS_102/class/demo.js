
// ***********************
// Conditionals 
// ***********************


function subtractMoney(num1, num2) {
    var result = num1 - num2;

    if (  result < 0 ) {
        console.error("You're poor :( ")
        result = num1
    }
    else {
        console.log("You spent " + num2 + " dollars.");
    }

    return result
};

// console.log( subtractMoney(100, 10) );
// console.log( subtractMoney(10, 100) );
// console.log( subtractMoney(10, 10) );

// Conditionals
// Greater/Less than >, < 
// Greater or Equal than >=, <=
// Equal ==  (e.g. 1 == "1")
// Strictly Equal ===
// Not !

// console.log( 2 !== "2" )

// ***********************
// Loops 
// ***********************

let students = ["Philip", "Teila", "Kinglsey", "Luqmaan", "Logan", "Robby", "Avery", "Ted", "Dan"]

// // Review
// students.push("Stephen");
// let theCheese = students.pop();
// let string = students.join("-");
// console.log(students.length);

// Individual Array Access
// console.log( students[2] )
// console.log( students[3] )


// Lets print out the names of the students
function printStudents(students) {

    for(let i=0; i > students.length; i++){
        console.log( students[i] )
    }
}
// printStudents(students)

function printNumbers(num) {

    for(let i=1; i <= num; i++){
        console.log( i)
    }
}
// printNumbers(100)

// Average name length function 
function averageNameLength(students) {
    let totalStudents = students.length;

    let sum = 0;
    for(let i=0; i < students.length; i++){
        // The folowing is also the same as `sum = sum + students[i].length`
        sum += students[i].length;
    }
    return sum/totalStudents
}

// The average first name length is 5.22
console.log( averageNameLength(students) );
