const express = require("express");
const Sequelize = require("sequelize");  // get sequelize lib to talk to db
const { User, Photo } = require('./models');

// const userRouter = require('./routes/userRouter');

const app = express();

// middleware interception btwn req/res server/client
app.use(express.json());  // parse the data thru post req.body
// app.use('/users', userRouter);

// put more specific route on top
app.get('/users/photos', async (req, res) => {
  const users = await User.findAll({
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

// Updating Existing Users -> PUT or PATCH method
//  in Postman: POST, http://localhost:8080/users/3, req.body: {"email": "nang@naver.kr"}, raw, json, send
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

// delete <table>.destroy(), route param = :id
// user provide us with :id (path variable)
// postman: Delete, http://localhost:8080/users/2, send
// confirm by: Get, http://localhost:8080/users, send see that User.id = 2 gone
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
      where: {
          id
      }
  });
  res.json(deletedUser);
});

// get all users
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// create a new user, <table>.create()
// postman post, body, raw, JSON, http://localhost:8080/users
// {
//   "firstName": "kim",
//   "lastName": "chi",
//   "email": "kc@naver.kr"
// }
// https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202021-06-15%20at%204.09.05%20AM.png?v=1623744574551
app.post('/users', async (req, res) => {
  // req.body contain an Obj key:value with firstName, lastName, email const firstName = req.body.firstName
  const { firstName, lastName, email } = req.body;
  console.log('!!!!! ***** create new users req.body', req.body);
  const newUser = await User.create({
    firstName,
    lastName,
    email
  });

  res.json({
    "message": "new user created success",
    "id": newUser.id,
    "firstName": newUser.firstName
  });
});

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