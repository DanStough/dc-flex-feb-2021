var fs = require('fs');
var contents = fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(error.message);
  }
  var linesArray = data.split('\n');
  var totalNewLines = linesArray.length - 1;
  console.log(totalNewLines);
});
