// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
function max(nums){
    let maximum = 0;
    for(let i = 0; i<nums.length;i++){
        if(i ===0){
            maximum = nums[i];
        }
        else if(maximum < nums[i]){
            maximum = nums[i];
        }
        else{
            null;
        }
    }
    return maximum;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
function sumNumbers(nums){
    let sums = 0;
    for(let i =0;i<nums.length;i++){
        sums += nums[i];
    }
    return sums;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives(nums){
    let pos = [];
    for(let i =0; i< nums.length;i++){
        if(nums[i]>0){
            pos.push(nums[i]);
        }
    }
    return pos;
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function isEven(num1){
    if(typeof num1 !== 'string'){
        if(num1%2 ===0 && typeof num1 !== 'object'){
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return false;
    }
}
function evens(nums){
    let ev = [];
    for(let i = 0; i<nums.length; i++){
        if(isEven(nums[i])){
            ev.push(nums[i]);
        }
    }
    return ev;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function isOdd(num2){
    if(typeof num2 === 'string' || num2%2 ===0 || num2%1 !==0){
        return false;
    }
    else{
        return true;
    }
}
function odds(nums){
    let od = [];
    for(let i = 0; i<nums.length; i++){
        if(isOdd(nums[i])){
            od.push(nums[i]);
        }
    }
    return od;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
function integers(nums){
    let ints = [];
    for(let i = 0; i<nums.length; i++){
        if(isEven(nums[i])||isOdd(nums[i])){
            ints.push(nums[i]);
        }
    }
    return ints;
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance(nums){
    let sqrs = [];
    for(let i = 0; i<nums.length;i++){
        sqrs.push(nums[i]*nums[i]);
    }
    return sqrs;
}