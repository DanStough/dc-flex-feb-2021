const express = require("express");
const cors = require('cors');
const es6Renderer = require('express-es6-template-engine');
const donuts = require("./donuts");
// console.log(donuts)

const app = express();

// anytime with app.use is middleware, specify static directory
app.use(cors());
app.use(express.static('public'));

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// Environment variable example
console.log(process.env.SUPER_SECRET_API_KEY)

const name = "dans"

app.get("/home", (req, res)=>{

    // If you want to get data...
    // FETCH from external api
    // OR, need data from database here

    const donutsIds = Object.keys(donuts)
    const newDonutArray = donutsIds.map( id => donuts[id])

    res.render('home', {
        locals: {
            title: `${name} super cool serverside render`,
            donuts: newDonutArray
        }
    })
})

app.get("/donuts/:id", (req, res) => {
    const donut = donuts[req.params.id]

    if(!donut){
        res.status(404).send("donut error")
    }

    res.render("donut", {
        locals: {
            donut
        }
    })
})

app.get("*", (req, res)=>{
    res.send("catch all")
})

app.listen(3000, ()=>{
    console.log("running on port 3000")
})
