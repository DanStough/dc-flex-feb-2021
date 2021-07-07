const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // Callback function
  // the line above means when we make a request / how we want to handle. client is going to come to root and it will respond with Hello world.
  res.send("Hello World");
});

app.listen(3000);
