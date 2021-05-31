const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require("express");
const es6Renderer = require("express-es6-template-engine");

const db = require('./db');
console.log('db: ', db);

const app = express();

const server = http.createServer(app);  // HTTP server using Express `app` which brinkg more flexibility

// setup install es6 template 
app.engine('html', es6Renderer);
app.set('views', 'templates');  // tell express to look into templates directory for the template ("view") files
app.set('view engine', 'html');

app.get('/friends/:handle', (req, res) => {
  /**
   * friend detail with route handler for /friend/heggy
   *  or /friend/teila, part of url treated just like arg
   *  in express which is req.params.handle 
   */
  // obj destructuring, let handle = req.query.handle = @chaz if /friends/@chaz
  const {handle} = req.params;
  const friend = db.find(friend => {
    // .find return 1st match of testing function or 
    //  no match => returns undefined
    return friend.handle === handle;
  });
  if (friend) {
    let htmlData = ``;
    htmlData += `<h1>${friend.name}</h1>`;
    htmlData += `<h3>${friend.handle}</h3>`;
    htmlData += `<h3>${friend.skill}</h3>`;
    res.send(htmlData);
  } else {
    // friend match not found - res.send(`no friend with handle ${handle}`);
    res.status(404)
       .send(`no friend with handle ${handle}`);
  }
});

app.post('/', (req, res) => {
  // ... handles data submitted in the form
});

app.get('/', (req, res) => {
  res.render('home');
});

// Express puts the value of the matched path in req.path
// for /friends = req.path
app.get('/friends', (req, res) => {
  let htmlData = `<ul>`;
  for (let friend of db) {
    // each friend's name is linked to detail page:
    htmlData += `<li>
                <a href="${req.path}${friend.handle}">${friend.name}</a>
                </li>`;
  }
  htmlData += `</ul>`
  res.send(htmlData);
});

app.get('*', (req, res) => {
  res.send('catch all address book');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});