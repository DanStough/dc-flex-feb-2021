const express = require("express");
const app = express();

const quotes = require("./mocks/quotes.json");

app.get("/quotes", (req, res) => {
  res.json({
    is: "working",
  });
});

app.get("/quotes", (req, res) => {
  res.json(quotes);
});

app.listen("8080", () => {
  console.log("The server is running");
});
