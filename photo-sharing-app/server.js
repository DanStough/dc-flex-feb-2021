const express = require("express");
const Sequelize = require("sequelize");
const { User, Photo } = require('./models');

const userRouter = require('./routes/userRouter');

const app = express();
app.use(express.json());  // parse the data of post

app.use('/users', userRouter);

app.get("/heartbeat", (req, res) => {
  res.json({
    "is": "working"
  });
  // res.send("it is working!");
});

app.post('/photos/:id', async (req, res) => {
  const { id } = req.params;
  
  const updatedPhoto = await Photo.update(req.body, {
    where: {
      id
    }
  });
  
  res.json(updatedPhoto);
});



// app.get('/users', async (req, res) => {
//   const users = await User.findAll(); // User Table in the 
//   res.json(users);
// });

app.get('/photos', async (req, res)=> {
  const photos = await Photo.findAll();
  res.json(photos);
});

app.listen(8080, () => {
  console.log("running on port 8080");
});