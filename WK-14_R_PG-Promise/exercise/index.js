require('dotenv').config();
const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const { v4: uuidv4 } = require('uuid');
const pgp = require('pg-promise')();

const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// const data = require('./dataObject')
const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}

const db = pgp(cn);
app.post("/profile", (req,res) => {
    console.log(req.body)

    // Create ID
    const id = uuidv4()

    // Save data in our "DB"
    req.body.id = id
    req.body.images = []
    data[id]=req.body

    res.status(200).send()
})

app.get("/profile/:id", (req, res) => {
    const profile = data[req.params.id]

    if(!profile){
        res.status(404).send("profile id not found")
    }

    res.render("profile", {
        locals: {
            profile
        }
    })
})

app.get("/", (req, res)=>{
    const profileIds = Object.keys(data)
    const profileArray = profileIds.map( id => data[id])
    console.log(profileArray)

    res.render('index', {
        locals: {
            profileArray
        }
    })
})

app.use(express.static('public'));

app.get("*", (req, res)=>{
    res.render('404');
})

app.listen(3000, ()=>{
    console.log("running on port 3000")
})
