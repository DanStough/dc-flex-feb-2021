// let testArray = [1, 2, 3, 4];
let testArray2 = ["Secretary", "of", "Society"];

// Simplified for-loop
function reduce(array, operationFn, initialValue){
  let accumulated = initialValue;
  for(let index = 0; index < array.length; index++){
    // operationFn(accumulated, element, index, array);
    accumulated = operationFn(accumulated, array[index]);
  }
  return accumulated;
}

// we are passing by ref
let reducedArray = reduce(testArray2, 
  (accumulator, currentValue) => {
  // currentValue[0] is first letter of the word
  return accumulator + currentValue[0];
  }
  , "");

console.log('reduced1: ', reducedArray);