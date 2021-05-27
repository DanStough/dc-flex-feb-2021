require('dotenv').config();
const express = require("express");
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const es6Renderer = require('express-es6-template-engine');
const { v4: uuidv4 } = require('uuid');

const app = express();

const sess = {
  secret:"nueral handshake",
  cookie: {maxAge: 60000}
}

// 1. Add express middlewares for static files and body parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(session(sess))
app.use(express.static('public'));

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
  // console.log(JSON.stringify(profile))

  // ASIDE: Access Tokens are super important! Treat them like passwords (never store in plain text)
  // You can use this to talk to the Github API
  // console.log("Access Token: " + accessToken)

  // Tells passport to move on
  cb(null, profile)
  }
));

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
  //What goes INTO the session here; right now it's everything in User
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
  //This is looking up the User in the database using the information from the session "id"
});


// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataObject')

// ensures that the user is authenticated
app.get('/logout', (req, res) => {
  req.logout()
  res.redirect("/")
})

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  res.redirect('/')
}

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

app.get("/home", ensureAuthenticated, (req, res)=>{
  const profileIds = Object.keys(data)
  const profileArray = profileIds.map( id => data[id])

  res.render('index', {
      locals: {
          profileArray
      }
  })
})

app.get("/", (req, res)=>{

    res.redirect('login.html')
    // res.send(`
    //   <h1 class="text-center">Hello you must log in to access your account<h1>
    //   <h1 class="text-center" ><a href="/auth/github">Login</a></h1>
    // `)
})

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/home');
  });


app.listen(3001, ()=>{
    console.log("running on port 3001")
})
