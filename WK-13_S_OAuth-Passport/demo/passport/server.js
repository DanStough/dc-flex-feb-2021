const express = require("express");
const session = require("express-session");

const app = express();

app.get("/", (req, res) => {
  console.log("here");
  res.send("<h1>Hello There</h1>");
});
