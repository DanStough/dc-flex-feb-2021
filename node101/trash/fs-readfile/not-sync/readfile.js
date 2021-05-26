const fs = require('fs');

let asyncData = fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('inside of callback: ', data);
  return data;
});

console.log('outside of callback: ', asyncData);