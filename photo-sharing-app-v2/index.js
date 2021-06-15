const express = require('express');
const Sequelize = require('sequelize');
const { User, Photo } = require('./models');

const app = express();

// post body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded (converts str => json)

// Create New User
app.post('/users', async (req, res) => {
  // pass it key-value pairs for the column names and values for the new row:
  // req.body contains an Obj with firstName, lastName, email
  // const firstName = req.body.firstName; etc....
  const { firstName, lastName, email } = req.body;
  const newUser = await User.create({
    firstName,
    lastName,
    email
  });

  // Send back the new user's Id in the resp: {id: 2}
  // res.json({
  //   id: newUser.id
  // });
  res.json(newUser);
  /**
   * {
    "id": 3,
    "firstName": "dan",
    "lastName": "guh",
    "email": "sigo@co.kr",
    "updatedAt": "2021-06-13T08:24:21.979Z",
    "createdAt": "2021-06-13T08:24:21.979Z"
    }
   */
});

// Retrieving Users
app.get('/users', async (req, res) => {
  // Getting all rows is performed with .findAll():
  const users = await User.findAll();
  res.json(users);
});

// Get all Users with their Photos
app.get('/users/photos', async (req, res) => {
  const users = await User.findAll({
    include: [{
      model: Photo
    }]
  });
  res.json(users);
});

// .findAll() retrieve all data from lastName column (attributes option for column names)
// get, http://localhost:3030/users/by-last-name
app.get('/users/by-last-name', async (req, res) => {
  const users = await User.findAll({
    attributes: ['lastName']
  });
  res.json(users);
  /**
   * [
      {
          "lastName": "Easley"
      },
      {
          "lastName": "Jigae"
      },
      {
          "lastName": "guh"
      }
    ]
   */
});

// To retrieve a row by the id use .findByPk() (find by primary key):
// method: get, http://localhost:3030/users/2 remember :id is path variable
app.get('/users/:id', async (req, res) => {
  try {
    const oneUser = await User.findByPk(req.params.id);
    if (oneUser === null) {
      res.status(404).json({
        message: 'User not found'
      });
      return
    }
    console.log('oneUser ===>', JSON.stringify(oneUser));
    // console.log('oneUser', oneUser);
    res.json(oneUser);
  }
  catch (err) {
    console.log('!!!!err ====> !!!!', err);
    res.status(404).json({
      message: 'User not found'
    });
  }
});

// text search, use where option
// http://localhost:3030/users/search then term = 'kimchi'
// app.post('/users/search', async (req, res) => {
//   const users = await User.findAll({
//     where: {
//       firstName: req.body.term,
//     }
//   });
//   console.log('here is result from single search: ==>', users);
//   res.json(users);
// });

// text search, use where option
// http://localhost:3030/users/search then term = 'kimchi', raw, json inside post req body {"term": "kimchi"}
// SELECT "id", "firstName", "lastName", "email", "createdAt", "updatedAt" FROM "Users" AS "User" WHERE ("User"."firstName" = 'dan' OR "User"."lastName" = 'dan');
// https://sequelize.org/v5/manual/querying.html under Combinations
app.post('/users/search', async (req, res) => {
  console.log('!!!!!  $$$$$$$$  ----- user search req.body', JSON.stringify(req.body));
  const users = await User.findAll({
    where: {
      [Sequelize.Op.or]: [
        {
          firstName: req.body.term,
        },
        {
          lastName: req.body.term
        }
      ]
    },
    include: [{
      model: Photo
    }]
  });
  console.log('!!!!!  $$$$$$$$  ----- here is result from multiple search: ==>', JSON.stringify(users));
  res.json(users);
});

// Get all Photos and incld User Obj with each Phto
app.get('/photos/users', async (req, res) => {
  const photos = await Photos.findAll({
    include: [{
      model: User
    }]
  });
});

// Updating Existing Users .update() accepts the key-value pairs to update. It is best to use a where option
//  postman Post, http://localhost:3030/users/2 (id is 2)
app.post('/users/:id', async (req, res) => {
  // const id = req.params.id
  const { id } = req.params;

  // Assuming that `req.body` is limited to
  // the keys firstName, lastName, and email
  const updatedUser = await User.update(req.body, {
    where: {
      id
    }
  });
  console.log('here is result from updating user: ==>', updatedUser);
  res.json(updatedUser);
});

// postman: Delete, http://localhost:3030/users/5
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
    where: {
      id
    }
  });
  console.log('here is result from multiple search: ==>', deletedUser);
  res.json(deletedUser);
});

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("*", (req, res) => {
  res.send("catch all");
});

app.listen("3030", () => {
  console.log("running on port http://localhost:3030");
});