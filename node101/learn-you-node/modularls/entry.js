var filterFn = require('./module');
var dir = process.argv[2];
var filterStr = process.argv[3];

// call module fx w/ 3 arg dir, filterstr, cb
filterFn(dir, filterStr, (err, list) => {
  if (err) {
    return console.error('There was an error: ', err.message);
  }
  list.forEach( file => {
    console.log(file);
  });
});