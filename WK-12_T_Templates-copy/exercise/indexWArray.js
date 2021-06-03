// 1. initialize express and templates
const express = require("express"); // dependency since no relative file path, import the module and assign it to var
const app = express();

const profilesObj = require("./dataObject"); // we are in js so no need to add .js 
const profilesArr = require('./dataArray');

const es6Renderer = require("express-es6-template-engine"); // dependency since no relative file path, we import the module and assign it to the var
const data = require("./dataArray");
app.engine('html', es6Renderer); // register the template engine function and associate it with html files
app.set('views', 'templates'); // tell Express to look in the templates dir for the template ("view") files
app.set('view engine', 'html'); // set html template engine (es6Renderer as the default for this app)


// 4. Detail page here. 
app.get('/profile/:id', (req, res) => {
  const id = req.params.id;
  // returns single obj. note: we donot want result as an array like .map or .filter returns array
  const profile = profilesArr.find( friend => friend.id === id);
  // console.log("MY profile finder!! ====>", profile);
  // console.log('result of .find profile: =====> ', profile);

  if (!profile) {
    res.status(404).render('notfound');
  } else {
    res.render('profile', {
      locals: {
        profile,
        title: 'FaceGram'
      }
    });
  }
});

// 5. List page here
// 3. Write out a route to test your server is working
app.get('/', (req, res) => {
  res.render('home', {
    locals: {
      title: 'FaceGram',
      profilesArr, 
      path: req.path
    }
  });
});

// catch all path
app.get("*", (req, res) => {
  res.send("hi catching all");
});

// 2. Start your express server
app.listen(8000, () => {
  console.log("running on port 8000");
});