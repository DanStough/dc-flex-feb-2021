
const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const { v4: uuidv4 } = require('uuid');

const app = express();

// 1. Add express middlewares for static files and body parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataObject')

// 4. Add a post method to handle adding a new user
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

    res.render('index', {
        locals: {
            profileArray
        }
    })
})

app.listen(3000, ()=>{
    console.log("running on port 3000")
})
