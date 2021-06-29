const express = require("express");
const Sequelize = require("sequelize");
const { User, Photo } = require("./models");

const usersRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());

app.user("/users", usersRouter);

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
  console.log(users, "HERE IT IS!");
  res.json(users);
});

// app.get("/users", async (req, res) => {
//   const users = await User.findAll();
//   res.json(users);
// });

app.post("/photos/:id", async (req, res) => {
  const { id } = req.params;
  // Assuming that `req.body` is limited to
  // the keys firstName, lastName, and email
  const updatedPhoto = await Photo.update(req.body, {
    where: {
      id,
    },
  });
  res.json(updatedPhoto);
});

app.get("/photos", async (req, res) => {
  const photos = await Photo.findAll();
  res.json(photos);
});

app.listen("3000", () => {
  console.log("The server is listening at port 3000");
});
