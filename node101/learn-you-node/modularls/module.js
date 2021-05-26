var fs = require("fs");
var path = require("path");

module.exports = function(dir, filterStr, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    var ext = "." + filterStr;
    list = list.filter( file => {
      return path.extname(file) === ext;
    });
    callback(null, list);
  });
}

