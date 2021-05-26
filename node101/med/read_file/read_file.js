// reads in the contents of the file, convert the text to all caps, and prints it out.

// https://nodejs.dev/learn/reading-files-with-nodejs

// methods for reading input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const fs = require('fs');

readline.question('filename: ', fileNameInput => {
  readline.close();
  fs.readFile(`./${fileNameInput}`, (err, data) => {
    if (err) {
      console.error(err.message);
      return;
    }
    const content = data.toString();
    const upperCased = content.toUpperCase();
    console.log(upperCased);
  });
});


/**
 * https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback
 * import { readFile } from 'fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});
 */