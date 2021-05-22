require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

const sess = {
    secret: 'keyboard cat',
    cookie: {maxAge: 60000}
}

// Set up sessions with cookies
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

app.get("/", (req, res) => {
    console.log("here");
    res.send(`<h1>Hello world</h1>
    <h2>you're cheap, log in</h2>
    <a href="/auth/github">Login</a>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>`)
})

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/ebooks');
  });

// This is the route I call when I want to log out
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

app.get('/ebooks', ensureAuthenticated, (req, res) => {
    res.send(`
    <h1>Hello, ${req.session.passport.user.displayName} </h1>
    <a href="/logout">Logout</a>
    <h2>Teila's Super Secret Ebook Top Ten List</h2>`)
});

app.listen(3001, ()=> {
    console.log("running on port 3001");
})
