
const express = require("express");
const es6Renderer = require('express-es6-template-engine');

// 1. Add express middlewares for static files and body parsing

const app = express();

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataObject')

// 4. Add a post method to handle adding a new user

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

app.get("*", (req, res)=>{
    res.send("catch all")
})

app.listen(3000, ()=>{
    console.log("running on port 3000")
})
