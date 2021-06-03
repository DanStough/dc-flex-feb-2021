const express = require("express");
const Sequelize = require("sequelize");
const { User } = require('./models');

const app = express();
app.use(express.json());  // parse the data of post

app.get("/heartbeat", (req, res) => {
  res.json({
    "is": "working"
  });
  // res.send("it is working!");
});

app.get('/users', async (req, res) => {
  const users = await User.findAll(); // User Table in the 
  res.json(users);
});

app.post('/users', async (req, res) => {
  // object destructuring const firstName = req.body.firstName
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    email
  });

  res.json({
    "message": "new user created successfully!",
    "id": newUser.id
  });
});

app.listen(8080, () => {
  console.log("running on port 8080");
});