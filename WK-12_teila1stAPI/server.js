const express = require("express");
const app = express();
app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});
app.listen("8080", () => {
  console.log("The server is working");
});
