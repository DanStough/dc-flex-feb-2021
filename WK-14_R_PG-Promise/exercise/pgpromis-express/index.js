const express = require("express");
const pgp = require(`pg-promise`)();

const app = express();

app.listen(3000, () => {
  console.log("starting server on port 3001");
});
