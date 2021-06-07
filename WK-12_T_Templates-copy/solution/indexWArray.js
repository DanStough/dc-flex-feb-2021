// 1. initialize express and templates
const express = require("express");
const es6Renderer = require('express-es6-template-engine');

const app = express();

// Configure Middleware (https://learn.digitalcrafts.com/flex/lessons/back-end-foundations/express-middleware/#serving-static-files)
app.use(express.static('public'));


// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataArray')
// console.log(data)

//4. Detail page here. 
app.get("/profile/:id", (req, res) => {
    const id = req.params.id

    // find single item that matches id
    const friend = data.find(item => item.id === id);
    console.log(friend);
    
    if (!friend){
        console.log("not found");
        res.status(404).render("404");
    } else {
        // es6templating
        res.render("profile", {
            locals: {
                profile: friend
            }
        })
    }


})

// 5. List page here
app.get("/", (req, res)=>{
    res.render("index", {
        locals: {
            profileArray: data
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
