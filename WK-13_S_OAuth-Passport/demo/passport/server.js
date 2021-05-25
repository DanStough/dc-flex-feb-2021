require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express()

app.use(session({
  secret: 'super secret',
  cookie: {maxAge: 60000}
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3030/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(JSON.stringify(profile))
    
    console.log("Access Token: " + accessToken)

    cb(null,profile);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});


app.get("/", (req,res)=>{
 res.send(`<h1>Hello</h1>`);
})

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(3030, () => {
  console.log("Server started") 
})