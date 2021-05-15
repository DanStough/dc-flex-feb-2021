const express = require("express");
const es6Renderer = require("express-es6-template-engine");

const app = express();

app.listen(3000, () => {
  console.log("running on port 3000");
});
