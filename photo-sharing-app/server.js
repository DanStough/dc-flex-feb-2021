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

// :id means it is a variable on route param
app.delete('/users/:id', async (req, res) => {
  // destructuring id, let id = req.params.id
  const { id } = req.params;
  const deletedUser = await User.destroy({
      where: {
          id
      }
  });
  res.json(deletedUser);
});

app.post('/users/:id', async (req, res) => {
  const { id } = req.params;
  
  // Assuming that `req.body` is limited to
  // the keys firstName, lastName, and email
  const updatedUser = await User.update(req.body, {
    where: {
      id
    }
  });
  
  res.json(updatedUser);
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