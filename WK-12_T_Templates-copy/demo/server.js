const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

console.log('env var process.env !!!!!! ****** !!!!!', process.env);

const name = "heggy";

app.get("/home", (req, res) => {

  // need data first
  // fetch() or do a api call axios()
  // axios()

  // OR, need data from database
  // db.get("data")


  res.render('home', {
    locals: {
      title: `${name}'s super nice pad`
    }
  });
});

app.get("*", (req, res) => {
  res.send("<h1>catch all</h1>");
});

app.listen(3000, () => {
  console.log("runs on 3000");
});