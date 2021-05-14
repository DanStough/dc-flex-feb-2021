// 1. initialize express and templates
const express = require("express"); // dependency since no relative file path, import the module and assign it to var
const app = express();

const dataArray = require("./dataArray"); //we are in js so no need to add .js 
console.log(dataArray);

const es6Renderer = require("express-es6-template-engine"); // dependency since no relative file path, we import the module and assign it to the var
app.engine('html', es6Renderer); // register the template engine function and associate it with html files
app.set('views', 'templates'); // tell Express to look in the templates dir for the template ("view") files
app.set('view engine', 'html'); // set html template engine (es6Rednerer as the default for this app)


// 4. Detail page here. 

// 5. List page here


// 3. Write out a route to test your server is working


app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// catch all path
app.get("*", (req, res) => {
  res.send("");
});

// 2. Start your express server
app.listen(3000, () => {
  console.log("running on port 8000");
});