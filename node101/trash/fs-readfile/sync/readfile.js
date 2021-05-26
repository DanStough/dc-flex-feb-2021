const fs = require('fs');
let syncData = fs.readFileSync('test.txt', 'utf8');
console.log(syncData);
console.log('this is faster!')