const express = require("express");
const Sequelize = require("sequelize");
const { User } = require("./models");

const app = express();
app.use(express.json());

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    email,
  });

  res.json({
    message: "new user created successfully",
    id: newUser.id,
  });
});

app.listen("3000", () => {
  console.log("The server is listening at port 3000");
});
