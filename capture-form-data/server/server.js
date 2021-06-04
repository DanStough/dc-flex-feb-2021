const express = require('express');
const app = express();

// add express middleware for body parsing
app.use(express.json()); // for parsing application/json

app.get('/heartbeat', (req, res) => {
  // res.send("I am here!");
  res.json({
    "is": "working!"
  });
});

// handle new user
app.post('/newcontact', (req, res) => {
  console.log(req.body);

  res.status(200).json({
    "data received": req.body
  });
});

app.listen(8080, () => {
  console.log("port running at 8080");
});
