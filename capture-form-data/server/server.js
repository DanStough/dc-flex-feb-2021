const express = require('express');
const cors = require('cors');
const app = express();

// add express middleware for body parsing
app.use(express.json()); // for parsing application/json
app.use(cors()); // stop cors

app.get('/heartbeat', (req, res) => {
  // res.send("I am here!");
  res.json({
    "is": "working!"
  });
});

// handle post a new user
app.post('/newcontact', (req, res) => {
  console.log('RESPONSE: ======>', req.body);

  res.json({
    "data received": req.body
  });
});

app.listen(8080, () => {
  console.log("port running at http://localhost:8080");
});
