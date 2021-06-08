require('dotenv').config() // loads dotenv, always put dotenv on top of my server
// console.log("it's working");
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const app = express();

// ----------------------------------------------------------------------------
//                                SESSION MIDDLEWARE                           
// ----------------------------------------------------------------------------
// Place session middleware before passport
// set cookie expiration maxAge so re-login.
// secret is key that lets browser know I am the server.
const sess = {
  secret: 'keyboard cat',
  cookie: {maxAge: 60000}
};
// Setup session middleware
app.use(session(sess));

// To retrieve dotenv data - process.env.<key>
console.log('GITHUB_CLIENT_ID from process.env: ===>', process.env.GITHUB_CLIENT_ID);

// ----------------------------------------------------------------------------
//                                PASSPORT                           
// ----------------------------------------------------------------------------
// http://www.passportjs.org/packages/passport-github/
// creating a new instance of 
//  Remember callbackURL is what I set when signed up for Github OauthApp
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:7070/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // User Profile
    console.log("user Profile from github login ======>", JSON.stringify(profile));

    // ASIDE: Access Tokens are super important!! Treat them like pwd (never store in plain text)
    // You can use this to talk to Github API
    console.log("Access Token: *****=======>" + accessToken);

    // Tell passport job is done. Move on, I got user profile
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

// show user when redirected to the root after log-in
// pre tag html makes font look like code block
app.get('/', (req, res) => {
  console.log("you are on root!");
  res.send(`
    <h1>Hello world</h1>
    <h2>Want to see Heggy's Top 10 books?</h2>
    <a href="/auth/github">Login now!</a>
    <h2>Session (from the server)</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>
  `);
});

//----------------------------------------------------------------------------
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
    // Successful authentication, redirect to ebooks premium page
    res.redirect('/ebooks');
  });

// ----------------------------------------------------------------------------
//                                    Logout                        
// ----------------------------------------------------------------------------
app.get('/logout', (req, res) => {
  /**
   * user logs out (use express middlware session), redirect to root route
   */
  req.logOut();
  res.redirect("/");
});

// ----------------------------------------------------------------------------
//                        Authentication Function                        
// ----------------------------------------------------------------------------
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

// content on my website that user must login to get to
//  pass optional param: `ensureAuthenticated` (add piece of middleware)
//  to make this (/ebooks) route private
app.get('/ebooks', ensureAuthenticated, (req, res) => {
  res.send(`
    <h1>Hello, req.session.passport.user.displayName: ${req.session.passport.user.displayName}</h1>
    <a href="/logout">Log Out</a>
    <h3>Hello, req.session.passport.user.photos: ${
      req.session.passport.user.photos.map(img => `
      <img src="${img.value}" width="200px">
      `).join("")
    }</h3>
    <h2>Heggy's Paid User Only Ebook Top 10 list:</h2>
  `);
});

app.listen(7070, () => {
  console.log("port up on http://localhost:7070");
});