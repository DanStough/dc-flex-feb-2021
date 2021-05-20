const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.post("/newcontact", (req, res) => {
  console.log("RESPONSE:", req.body);
  res.json({
    "data received": req.body,
  });
});

app.listen("3000", () => {
  console.log("Listening at port 3000");
});
