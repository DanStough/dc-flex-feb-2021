const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    email,
  });
});

app.delete("/users/:id", async (req, res) => {
  // ‘/users/:id’ is a route param
  const { id } = req.params; //destructuring the id
  const deletedUser = await User.destroy({
    where: {
      id,
    },
  });
  res.json(deletedUser);
});

module.exports = router;
