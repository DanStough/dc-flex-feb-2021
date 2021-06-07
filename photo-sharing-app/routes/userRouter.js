const express = require('express');
const router = express.Router();
const { Photo, User } = require('../models');


/**
 *  Delete
 */
// :id means it is a variable on route param
router.delete('/:id', async (req, res) => {
  // destructuring id, let id = req.params.id
  const { id } = req.params;
  const deletedUser = await User.destroy({
      where: {
          id
      }
  });
  res.json(deletedUser);
});

/**
 * Update
 */

router.get('/photos', async (req, res) => {
  const users = await User.findAll({
      include: [{
          model: Photo
      }]
  });
  res.json(users);
});

/**
 * Get All
 */

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

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

router.post('/', async (req, res) => {
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

module.exports = router;