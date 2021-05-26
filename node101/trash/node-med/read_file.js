const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('filename: ', fileName => {
  readline.close();
  console.log("fileName => ", fileName);
});
