// console.log(process.argv);
let processArr = process.argv;
console.log('Process Argument', process.argv)
let sumResult = 0;
for ( let i = 2; i < processArr.length; i++ ) {
  sumResult += Number(processArr[i]);
}
console.log(sumResult);

/**
 * to run > node baby-steps.js 'heggy' 'love' 'kdrama'
 * Process Argument 
 * [
  '/Users/heggy/.nvm/versions/node/v14.16.1/bin/node',
  '/Users/heggy/Documents/code/digitalCraft/dc-flex-feb-2021/node101/learn-you-node/baby-steps.js',
  'heggy',
  'love',
  'kdrama'
 * ]
 */

/** 
// or used splice and reduce
let processArr = ['*', '?', 3, 4, 5];
// cut starting poisition 2 and til end of the array
let cleanProcesArr = processArr.slice(2, processArr.length);
// cleanProcesArr => [3,4,5]
let sumArr = cleanProcesArr.reduce((accum, currentItem) => {
  return +accum + +currentItem;
});
// sumArr => 12

*/
