// This helps manage the secret data from github
require('dotenv').config();

// Old News from express
const express = require('express');
const session = require('express-session');

// NEW! Passport import
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

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

    // ASIDE: Access Tokens are super important! Treat them like passwords (never store in plain text)
    // You can use this to talk to the Github API
    console.log("Access Token: " + accessToken)

    // Tells passport to move on
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
// END these next lines make it work with the session middleware

app.get("/", (req, res) => {
    console.log("here");

    // Display all the session data saved on the server
    res.send(`<h1>Hello world</h1>
    <h2>you're cheap, log in</h2>
    <a href="/auth/github">Login</a>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>`)
})

// This it the endpoint you call when you want to log in
app.get('/auth/github',
  passport.authenticate('github'));

// Callback: this must match the name in the GitHubStrategy above AND the one we typed in Github UI
app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/ebooks');
});

// This is the route you call when you want to log out
// Name it whatever you want
app.get('/logout', (req, res) => {
    req.logout()
    res.redirect("/")
})

// How can we make sure that someone is logged in to see a page?
// We make our own middleware we can add to our routes.
function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

// This is a secret page that only logged in users can see!
app.get('/ebooks', ensureAuthenticated, (req, res) => {
    res.send(`
    <h1>Hello, ${req.session.passport.user.displayName} </h1>
    <a href="/logout">Logout</a>
    <h2>Teila's Super Secret Ebook Top Ten List</h2>`)
});

// Old news
app.listen(3001, ()=> {
    console.log("running on port 3001");
})
