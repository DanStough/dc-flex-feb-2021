// 1. initialize express and templates
const express = require("express"); // dependency since no relative file path, import the module and assign it to var
const app = express();

const profilesObj = require("./dataObject"); //we are in js so no need to add .js 

const es6Renderer = require("express-es6-template-engine"); // dependency since no relative file path, we import the module and assign it to the var
app.engine('html', es6Renderer); // register the template engine function and associate it with html files
app.set('views', 'templates'); // tell Express to look in the templates dir for the template ("view") files
app.set('view engine', 'html'); // set html template engine (es6Renderer as the default for this app)


// 4. Detail page here. 
app.get('/profile/:id', (req, res) => {
  // obj destructuring: let id = req.params.id = 'f30494db-5d5a-4a7c-8dcf-a38edb2ef13e'
  const {id} = req.params;
  // matching profile obj with id
  // const profile = profilesObj[req.params.id];
  const profile = profilesObj[id];

  if(!profile) {
    /**
     * if profilesObj[id] does not exist nor `undefined`
     *  then render `notfound.html`
     */
    res.status(404)
       .render('notfound');
  } else {
    // http://localhost:8000/profile/8319b618-57b4-4d3d-8222-3c532c2754f7
    res.render('profile', {
      locals: {
        profile,
        title: '📸 FACEGRAM APP'
      }
    });
  }
});

// 5. List page here
// 3. Write out a route to test your server is working
app.get('/', (req, res) => {
  /**
   * Object.keys returns array, keys of each obj
  ["f30494db-5d5a-4a7c-8dcf-a38edb2ef13e", "0cdf49ae-e30b-4967-9722-d085196d1087", "e9cfa2b1-6ee1-44aa-87ea-e20d80258777", "257b0b42-91c3-4aa4-ba01-72ec73aa28fb", "8319b618-57b4-4d3d-8222-3c532c2754f7"]
   */
  const idProfilesArr = Object.keys(profilesObj);
  /**
   * returns array of each profile obj
   * [{…}, {…}, {…}, {…}, {…}]
   * Let's look closely what each {profile obj} look like:
   * { avatar: "https://cdn.fakercloud.com/avatars/edgarchris99_128.jpg",
      email: "Lexie.Parisian@yahoo.com",
      id: "f30494db-5d5a-4a7c-8dcf-a38edb2ef13e",
      images: ["http://placeimg.com/640/480/food", "http://placeimg.com/640/480/food"],
      name: "Ricky Berge"}
   */
  const profileObjArr = idProfilesArr.map(id => profilesObj[id]);
  /**
   * list of profiles avatar img and clickable names
   */
  res.render('home', {
    locals: {
      profileObjArr,
      title: '📸 FACEGRAM APP',
      path: req.path
    }
  });
});

// catch all path
app.get("*", (req, res) => {
  res.send("");
});

// 2. Start your express server
app.listen(8000, () => {
  console.log("running on port 8000");
});