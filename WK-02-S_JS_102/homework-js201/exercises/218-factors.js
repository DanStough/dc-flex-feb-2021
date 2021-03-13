// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10
function gcd(num1, num2){
    if(num2>num1){
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }
    while(true){
        if(num2 === 0) return num1;
        num1 = num1%num2;
        if(num1 === 0) return num2;
        num2 = num2%num1;
    }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o
//
// Examples:
// factors(1) --> [1]
// factors(12) --> [1, 2, 3, 4, 6, 12]
// factors(42) --> [1, 2, 3, 6, 7, 14, 21, 42]
function factors(num){
    let arr = [];
    for(let i =1; i <=num;i++){
        if(num%i ===0){
            arr.push(i);
        }
    }
    return arr;
}
