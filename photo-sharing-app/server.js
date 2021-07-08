const express = require("express");
const Sequelize = require("sequelize");  // get sequelize lib to talk to db
const { User, Photo } = require('./models');

const userRouter = require('./routes/userRouter');
const userRouter = require('./routes/photoRouter');

const app = express();

// middleware interception btwn req/res server/client
app.use(express.json());  // parse the data thru post req.body
app.use('/users', userRouter);
app.use('/photos', photoRouter)

// Updating Existing Photos -> PUT or PATCH method
//  in Postman: POST, http://localhost:8080/photos/3, req.body: {"email": "nang@naver.kr"}, raw, json, send, :id is route param
// where ?id=1 is query param
app.post('/photos/:id', async (req, res) => {
  const { id } = req.params;
  
  // Assuming that `req.body` is limited to
  // the keys firstName, lastName, and email
  const updatedPhoto = await Photo.update(req.body, {
    where: {
      id
    }
  });
  
  res.json(updatedPhoto);
});

app.get('/photos', async (req, res) => {
  const photos = await Photo.findAll();
  res.json(photos);
});

app.get("*", (req, res) => {
  res.json({
    "is": "working"
  });
  // res.send("it is working!");
});

app.listen(8080, () => {
  console.log("running on port http://localhost:8080");
});