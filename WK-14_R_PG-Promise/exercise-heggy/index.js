require('dotenv').config();
const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const { v4: uuidv4 } = require('uuid');
const pgp = require('pg-promise')(); // created pgp instance ready to make db connection

const app = express();

// add express middleware for body parsing, form urlencoded
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// const data = require('./dataObject') // no need. psql db up.

// configuration obj https://github.com/vitaly-t/pg-promise/wiki/connection-syntax
const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};
const db = pgp(cn); // faceGram db obj created

app.post("/profile", async (req,res) => {
  console.log("create new user ====> req.body", req.body);
  /**
   * req.body is what I put in my form or postman = {
      name: 'Kang',
      email: 'Dog@gmail.com',
      avatar: 'https://placeimg.com/128/128/arch/sepia'
    }
   */
  const profile = req.body;

  try {
    let dbRes = await db.one(`
    INSERT INTO profiles (name, email, avatar)
    VALUES($1, $2, $3) RETURNING id;`,
    [profile.name, profile.email, profile.avatar]);

    profile.id = dbRes.id;
    console.log("$$$$$$ newly profile: ====>", JSON.stringify(profile));
    /**
     * profile obj => {
     * "name":"Kang",
     * "email":"Dog@gmail.com",
     * "avatar":"https://placeimg.com/128/128/arch/sepia",
     * "id":7
     * }
     */
    res.status(200).send(profile);
  }
  catch (err) {
    res.status(500).send("server error creating profile");
  }
})

app.get("/profile/:id", async (req, res) => {
  let profile = {};

  try {
    // dbRes => [{id: 4, "name": "Kang", ...}]
    let dbRes = await db.any(`
    SELECT * FROM profiles
    WHERE id = $1;`,
    [req.params.id]);

    // returns no id
    if (dbRes.length === 0) {
      res.status(404).send("profile id not found");
      return
    }

    // when there are duplicate ids in db [{id: 4}, {id: 4}]
    if (dbRes.length > 1) {
      res.status(500).send("server error: duplicate profile");
      return
    }

    // select first item in array [{id: 4, "name": "Kang", ...},{}]
    profile = dbRes[0];

    // images = [{id: 4, "name": "Kang", url: "www.placeimage.com"},{}]
    const images = await db.any(`
    SELECT * FROM images
    WHERE profile_id = $1;`,
    [profile.id]);

    profile.images = images.map(image => image.url);
    console.log('$$$$$$$$ final profile with img url $$$$$$ ===>', JSON.stringify(profile));
    /**
     * final resulting `profile` obj after adding images
     * {"id":3,
     * "name":"Minnie Hessel",
     * "email":"Ron40@gmail.com",
     * "avatar":"https://cdn.fakercloud.com/avatars/jervo_128.jpg",
     * "images":["http://placeimg.com/640/480/food"]}
     */
  }
  catch (err) {
    res.status(500).send("server error: could not query db");
  }

  res.render("profile", {
    locals: {
      profile
    }
  });
});

app.get("/", async (req, res) => {
  /**
   * return array of obj from db.any()
   */
  let profileArray = [];
  try {
    profileArray = await db.any(`SELECT * FROM profiles;`);
    console.log('####### !!!!!!! profileArray data => !!!!! #####', profileArray);
    /** profileArray from database
     * [{
          id: 1,
          name: 'Ricky Berge',
          email: 'Lexie.Parisian@yahoo.com',
          avatar: 'https://cdn.fakercloud.com/avatars/edgarchris99_128.jpg'
        }, {...}, {...}]
     */
  }
  catch (err) {
    res.status(500).send("server error: could not query db");
  }

  res.render('index', {
    locals: {
      profileArray
    }
  });
})

app.get("*", (req, res)=>{
    res.render('404');
})

app.listen(3000, ()=>{
    console.log("running on port http://localhost:3000");
})
