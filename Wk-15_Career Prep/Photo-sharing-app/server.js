const express = require("express");
const Sequelize = require("sequelize");
const { User, Photo } = require("./models");

const { usersRouter, photoRouter } = require("./routes");

const app = express();
app.use(express.json());

app.use("/users", usersRouter);

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.get("/users/photos", async (req, res) => {
  const users = await User.findAll({
    include: [
      {
        model: Photo,
      },
    ],
  });
  res.json(users);
});

// app.get("/users", async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });
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

app.post("/photos/:id", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = await Photo.update({
    firstName,
    lastName,
    email,
  });

  res.json({
    message: "new user created successfully",
    id: newUser.id,
  });
});
app.get("/photos", async (req, res) => {
  const photos = await Photo.findAll();
  res.json(photos);
});

app.listen("8081", () => {
  console.log("The Server is listening at port 8081");
});
