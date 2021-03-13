// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'
function fizzbuzz(num1){
    let arr = [];
    let fizzyStr = '';
    for(let i=0;i<num1; i++){
        arr.push(i+1);
    }
    //console.log(arr);
    for(let j=0; j<arr.length; j++){
        if(arr[j]%3 !==0 && arr[j]%5 !==0){
            fizzyStr += '.';
        }
        else if(arr[j]%5 ==0 && arr[j]%3 !==0){
            fizzyStr += 'buzz';
        }
        else if(arr[j]%5 !==0 && arr[j]%3 ==0){
            fizzyStr += 'fizz';
        }
        else if(arr[j]%5 ==0 && arr[j]%3 ==0){
            fizzyStr += 'fizzbuzz';
        }
        else{
            null;
        }
    }
    return fizzyStr;
}
// console.log(fizzbuzz(3));
// console.log(fizzbuzz(15));
// console.log(fizzbuzz('a'));