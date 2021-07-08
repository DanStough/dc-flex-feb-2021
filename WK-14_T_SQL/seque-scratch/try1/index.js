const express = require("express");
const Sequelize = require('sequelize');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("*", (req, res) => {
  /**
   * catch all route redirect back home
   */
  res.send('You are here!');
});


app.listen("7777", () => {
  console.log("running on port http://localhost:7777");
});