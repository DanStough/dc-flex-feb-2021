const express = require("express");
const cors = require('cors');
const es6Renderer = require('express-es6-template-engine');

// named export renaming it uuidv4
const { v4: uuidv4 } = require('uuid');

const app = express();

// 1. Add express middlewares for static files and body parsing
app.use(cors());
app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded (converts str => json)

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataObject')

// 4. Add a post method to handle adding a new user
app.post('/profile', (req, res) => {
    console.log('full req.body', req.body);

    const id = uuidv4();

    req.body.id = id;
    req.body.images = [];
    
    data[id] = req.body;
    res.status(200).send();
});

app.get("/profile/:id", (req, res) => {
    const profile = data[req.params.id]

    if(!profile){
        res.status(404).render('notfound');
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
    console.log("running on port http://localhost:3000")
})
