const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get("/home", (req, res) => {
  res.render('home', {
    locals: {
      
    }
  });
});

app.get("*", (req, res) => {
  res.send("<h1>catch all</h1>");
});

app.listen(3000, () => {
  console.log("runs on 3000");
});