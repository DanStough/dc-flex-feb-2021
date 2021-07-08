const express = require('express');
const router = express.Router();
const { User, Photo } = require('../models');


// Get ALL Users route :id params have to be last
router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// put more specific route on top /users/photos
router.get('/photos', async (req, res) => {
  const users = await User.findAll({
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

// Updating Existing Users -> PUT or PATCH method
//  in Postman: POST, http://localhost:8080/users/3, req.body: {"email": "nang@naver.kr"}, raw, json, send
router.post('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.destroy({
      where: {
          id
      }
  });
  res.json(deletedUser);
});

// create a new user, <table>.create()
// postman post, body, raw, JSON, http://localhost:8080/users
// {
//   "firstName": "kim",
//   "lastName": "chi",
//   "email": "kc@naver.kr"
// }
// https://cdn.glitch.com/cb093bfd-142f-45b3-bdb4-52ff49e0a1c2%2FScreen%20Shot%202021-06-15%20at%204.09.05%20AM.png?v=1623744574551
router.post('/', async (req, res) => {
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

module.exports = router;