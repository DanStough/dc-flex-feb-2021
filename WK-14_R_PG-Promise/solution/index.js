
require('dotenv').config();
const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const pgp = require(`pg-promise`)();

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const cn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
}

const db = pgp(cn)

app.post("/profile", async (req,res) => {
    console.log(req.body);
    const profile = req.body;

    try {
        let dbRes = await db.one(`
        INSERT INTO profiles (name, email, avatar) 
        VALUES($1, $2, $3) RETURNING id;`, 
        [profile.name, profile.email, profile.avatar]);

        profile.id = dbRes.id;

        res.status(200).send(profile)
    }
    catch (err) {
        res.status(500).send("server error creating profile");
    }
})

app.get("/profile/:id", async (req, res) => {
    let profile = {};

    try {
        let dbRes = await db.any(`
        SELECT * FROM profiles 
        WHERE id = $1;`, 
        [req.params.id]);

        if (dbRes.length===0) {
            res.status(404).send("profile id not found")
            return
        }

        if (dbRes.length>1) {
            res.status(500).send("server error: duplicate profile")
            return
        }

        profile = dbRes[0];

        const images = await db.any(`
        SELECT * FROM images 
        WHERE profile_id = $1;`, 
        [profile.id]);

        profile.images = images.map(image => image.url);
    }
    catch (err) {
        res.status(500).send("server error: could not query db")
    }

    res.render("profile", {
        locals: {
            profile
        }
    })
})

app.get("/", async (req, res)=>{
    let profileArray = [];
    try {
        profileArray = await db.any(`SELECT * FROM profiles;`);
    }
    catch (err) {
        res.status(500).send("server error: could not query db")
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
    console.log("running on port 3000")
})
