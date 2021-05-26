const fs = require('fs'); // import fs package
// alert user for input file name
// methods for reading input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Input file: ', inputFile => {
  fs.readFile(`./${inputFile}`, (err, data) => {
    if (err) {
      console.log(err.message);
      readline.close();
      return;
    }
    const content = data.toString();
    const upperCased = content.toUpperCase();
    readline.question('Output file: ', outputFile => {
      readline.close();

      fs.writeFile(`./${outputFile}`, upperCased, err => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Wrote to file ", outputFile);
      });
    });
  });
});