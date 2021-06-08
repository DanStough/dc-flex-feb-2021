
require('dotenv').config();
const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

// 1. Add express middlewares for static files and body parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const sess = {
    secret: 'keyboard cat',
    cookie: {maxAge: 60000}
}

// Set up sessions middleware with cookies
app.use(session(sess))

// Setting up Passport and the passport strategy
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(JSON.stringify(profile))

    console.log("Access Token: " + accessToken)

    cb(null, profile)
  }
));

// Attach the passport middleware to express
app.use(passport.initialize())

// BEGIN these next lines make it work with the session middleware
app.use(passport.session())

passport.serializeUser(function(user, done) {
    //What goes INTO the session here; right now it's everything in User
    done(null, user);
});

passport.deserializeUser(function(id, done) {
    done(null, id);
    //This is looking up the User in the database using the information from the session "id"
});

const data = require('./dataObject')

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login.html')
}

app.get('/auth/github',
  passport.authenticate('github'));

// Callback: this must match the name in the GitHubStrategy above AND the one we typed in Github UI
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

// This is the route you call when you want to log out
// Name it whatever you want
app.get('/logout', (req, res) => {
    req.logout()
    res.redirect("/")
})

// 4. Add a post method to handle adding a new user
app.post("/profile", ensureAuthenticated, (req,res) => {
    console.log(req.body)

    // Create ID
    const id = uuidv4()

    // Save data in our "DB"
    req.body.id = id
    req.body.images = []
    data[id]=req.body

    res.status(200).send()
})

app.get("/profile/:id", ensureAuthenticated, (req, res) => {
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

app.get("/", ensureAuthenticated, (req, res)=>{
    const profileIds = Object.keys(data)
    const profileArray = profileIds.map( id => data[id])

    res.render('index', {
        locals: {
            profileArray
        }
    })
})

app.use(express.static('public'));

app.listen(3001, ()=>{
    console.log("running on port http://localhost:3001")
})
