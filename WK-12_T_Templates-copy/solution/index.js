
// 1. initialize express and templates
const express = require("express");
const es6Renderer = require('express-es6-template-engine');

const app = express();

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataObject')
// console.log(data)

// 4. Detail page here. 
app.get("/profile/:id", (req, res) => {
    const profile = data[req.params.id] // lkp
    kl

    if(!profile){
        res.status(404).send("profile id not found")
    }

    res.render("profile", {
        locals: {
            profile
        }
    })
})

// 5. List page here
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

// 3. Write out a route to test your server is working
app.get("*", (req, res)=>{
    res.send("catch all")
})

// 2. Start your express server
app.listen(3000, ()=>{
    console.log("running on port 3000")
})
