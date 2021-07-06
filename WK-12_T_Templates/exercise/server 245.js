const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const data = require("./dataArray");

const app = express();

app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

console.log(data);

app.get("/heartbeats", (req, res) => {
  res.json({
    is: "working",
  });
});

app.get("/friend", (req, res) => {
  res.render("friend", {
    locals: {
      title: "John Jacob J. Schmidt",
    },
  });
});

app.listen("3000", () => {
  console.log("The server is running at port 3000");
});
