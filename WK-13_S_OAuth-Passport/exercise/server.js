require("dotenv").config();
const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const { v4: uuidv4 } = require("uuid");
const session = require("express-session");
const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

const app = express();

const sess = {
  secret: "keyboard cat",
  cookie: { maxAge: 60000 },
};

app.use(session(sess));

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(JSON.stringify(profile));
      // console.log("Access Token:" = accessToken)

      cb(null, profile);
    }
  )
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

// 1. Add express middlewares for static files and body parsing
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Configure Template Engine
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const data = require("./dataObject");

// 4. Add a post method to handle adding a new user
app.post("/profile", (req, res) => {
  console.log(req.body);

  // Create ID
  const id = uuidv4();

  // Save data in our "DB"
  req.body.id = id;
  req.body.images = [];
  data[id] = req.body;

  res.status(200).send();
});

app.get("/profile/:id", (req, res) => {
  const profile = data[req.params.id];

  if (!profile) {
    res.status(404).send("profile id not found");
  }

  res.render("profile", {
    locals: {
      profile,
    },
  });
});

app.get("/", (req, res) => {
  const profileIds = Object.keys(data);
  const profileArray = profileIds.map((id) => data[id]);

  res.render("index", {
    locals: {
      profileArray,
    },
  });
});

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("/");
  console.log("here");
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

app.get("login", ensureAuthenticated, (req, res) => {
  res.send(`<h1>My Profile</h1>
          <button><a href="/auth/github">Login</a></button>`);
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
