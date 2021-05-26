/**
 *  # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## FILTERED LS (Exercise 5 of 13)  
   
  Create a file named filtered-ls.js.  
   
  Create a program that prints a list of files in a given  
  directory, filtered by the extension of the files. You will be  
  provided a directory name as the first argument to your program  
  (e.g. '/path/to/dir/') and a file extension to filter by as the  
  second argument.  
   
  For example, if you get 'txt' as the second argument then you  
  will need to filter the list to only files that end with .txt.  
  Note that the second argument will not come prefixed with a  
  '.'.  
   
  Keep in mind that the first arguments of your program are not  
  the first values of the process.argv array, as the first two  
  values are reserved for system info by Node.  
   
  The list of files should be printed to the console, one file  
  per line. You must use asynchronous I/O.  
   
 ──────────────────────────────────────────────────────────────────  
   
 ## HINTS  
   
  The fs.readdir() method takes a pathname as its first argument  
  and a callback as its second. The callback signature is:  
   
     function callback (err, list) { ..... }  
   
  where list is an array of filename strings.  
   
  Documentation on the fs module can be found by pointing your  
  browser here:  
  file:///Users/heggy/.npm/_npx/2342/lib/node_modules/learnyounod  
  e/docs-nodejs/fs.html  
   
  You may also find node's path module helpful, particularly the  
  extname method.  
   
  Documentation on the path module can be found by pointing your  
  browser here:  
  file:///Users/heggy/.npm/_npx/2342/lib/node_modules/learnyounod  
  e/docs-nodejs/path.html  
   
  Check to see if your program is correct by running this  
  command:  
   
     $ learnyounode verify filtered-ls.js  
 */

// [] prints a listed of files in a directory, filtered by extension

/** 
filename = 'myFile.txt'

filename.split('.') => ["myFile", "txt"]
extension.pop() => "txt"

extension = filename.split('.').pop();

console.log(extension);


var fs = require('fs');
var path = require('path');
console.log(path.extname('myFile.txt'));
*/

var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];
/**
 * folder: /var/folders/z_/1486y5_97xjd8jpqb597xxkc0000gn/T/_learnyounode_4307
 * ext: .md

// console.log('folder: ', folder);
// console.log('ext: ', ext);
 */
// files is an array
fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(err.message);
  } else {
    // console.log("\nCurrent directory filenames: ");
    files.forEach(file => {
      // console.log('file name: ', file);
      // path.extname(file) is .html
      // console.log("path.extname(file)", path.extname(file));
      if (path.extname(file) === ext) {
        console.log(file);
      }
    });
  }
});

// list is a array of filename strings
fs.readdir(process.argv[2], (err, list) => {
  if (err) throw err;
  var ext = "." + process.argv[3];
  // if the file ext .md === .md?
  return list.filter( file => {
    path.extname(file) === ext;
  });
    
  }
});
