/**
 *  Create a file named http-client.js.  
   
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).  
 */
var http = require('http');
var url = process.argv[2];

/**
 * Where the response object is a Node Stream object. You can treat Node  
  Streams as objects that emit events. The three events that are of most  
  interest are: "data", "error" and "end". You listen to an event like so:  
   
    response.on('data', function (data) { ... })  
  The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings.  
 */
  http.get(url, function (response) {
    response.on('data', function (data) {
      console.log(data.toString());
    })
  }).on('error', console.error)