require('dotenv').config() // loads dotenv, always put dotenv on top of my server
const express = require("express");
const es6Renderer = require('express-es6-template-engine');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

// 1. Add express middleware for static files and body parsing
// __dirname is root of my project, folder /public will be static location, middleware hint is app.use
app.use(express.static('public'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Configure Template Engine
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataObject');

// ----------------------------------------------------------------------------
//                                SESSION MIDDLEWARE                           
// ----------------------------------------------------------------------------
// Place session middleware before Passport
// set cookie expiration maxAge so re-login.
// secret is key that lets browser know I am the server.
const sess = {
    secret: 'keyboard lama',
    cookie: {maxAge: 60000}
};
// Setup session middleware
app.use(session(sess));
// ----------------------------------------------------------------------------
//                                PASSPORT                           
// ----------------------------------------------------------------------------
// http://www.passportjs.org/packages/passport-github/
// creating a new instance of 
//  Remember callbackURL is what I set when signed up for Github OauthApp
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  // this is function run when someone logs-in, you will get accessToken, refreshToken, profile, cb --- profile information is here!!
  function(accessToken, refreshToken, profile, cb) {
    console.log("user Profile from github login ======>", JSON.stringify(profile));

    // ASIDE: Access Tokens are super important!! Treat them like pwd (never store in plain text)
    // You can use this to talk to Github API
    console.log("Access Token: *****=======>" + accessToken);

    // Tell passport job is done then move on, I got user profile
    // this callback runs when someone logs-in
    // cb(errorMessage = Null No error here, profile=>save the profile info)
    cb(null, profile)
  }
));
// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());  // glue the login info inside my sess obj

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, done) {
  // What goes INTO the session here; right now it's everything in User
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


console.log('process.env.GITHUB_CLIENT_ID ====>', process.env.GITHUB_CLIENT_ID);

// ----------------------------------------------------------------------------
//                        GITHUB STRATEGY FROM PASSPORT                        
// ----------------------------------------------------------------------------
// http://www.passportjs.org/packages/passport-github/
// PUT 2 /auth/github/ endpoints after `/` root home pg

// 1. auth/github takes me to github, user enters github credential to login
app.get('/auth/github',
  passport.authenticate('github'));

// 2. once profile is received, callback route => redirect `/` homepage
// 1,2 GOAL: 1. go to my app => 2. Github => 3. back to my app
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to list of user pg, home
    res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login.html')
}

// log out route
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect("/");
});

// show the req.session data
app.get('/sessiondata', ensureAuthenticated, (req, res) => {
    console.log(`You are on session data page 
        req.session
    `);
    res.send(`
        <h1>Session data (from the server) req.session:</h1>
        <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    `);
});

// only visit if I am logged in
app.get('/ebooks', ensureAuthenticated, (req, res) => {
    res.send(`<h1>Heggy's super secret top 10 books</h1>`);
});
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
    const profile = data[req.params.id];

    if(!profile){
        res.status(404).send("profile id not found")
    }

    const photosArray = req.session.passport.user.photos;
    const userObj = req.session.passport.user;

    res.render("profile", {
        locals: {
            profile,
            heggy: req.session.passport.user.username,
            photosArray,
            userObj
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

app.listen(3000, ()=>{
    console.log("running on port http://localhost:3000")
})
