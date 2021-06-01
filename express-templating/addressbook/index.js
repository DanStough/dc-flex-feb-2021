const http = require('http');
const express = require("express");
const es6Renderer = require("express-es6-template-engine");

const db = require('./db');

const hostname = '127.0.0.1';
const port = 3000;
const app = express(); // instantiate express methods for routing, error handling

app.engine('html', es6Renderer); // registers the template engine function and associates it with html files
app.set('views', 'templates'); // tell Express to look in the templates directory for the template ("view") files
app.set('view engine', 'html'); // set html template engine (es6Renderer as the default for this application)

// console.log('db: ', db);

const server = http.createServer(app);  // HTTP server using Express `app` which brinkg more flexibility

// setup install es6 template 
app.engine('html', es6Renderer);
app.set('views', 'templates');  // tell express to look into templates directory for the template ("view") files
app.set('view engine', 'html'); // set template engine: our es6Renderer as the default for this app

app.get('/friends/:handle', (req, res) => {
  /**
   * friend detail with route handler for /friend/heggy
   *  or /friend/teila, part of url treated just like arg
   *  in express which is req.params.handle 
   */
  // obj destructuring, let handle = req.params.handle = @chaz if /friends/@chaz
  const {handle} = req.params;
  // const friend = db.find(f => f.handle === handle);
  const friend = db.find(friend => {
  /**
   * Returns {}, the first matching 
   *   req.params (@fin) with friend.handle
   * If no match then returns `undefined`
   *   then error handling with `res.status(404)`
   */
    // .find return 1st match of testing function or 
    //  no match => returns undefined
    return friend.handle === handle;
  });
  if (friend) {
    // render in friend.html file with data friend
    res.render('friend', {
      locals: {
        title: `${friend.name}'s info`,
// shorthand notation: friend: friend
        friend
      },
      partials: {
        head: '/partials/head'
      }
    });
  } else {
    // friend match not found - res.send(`no friend with handle @kimchi`);
    res.status(404)
       .send(`no friend with handle ${handle}`);
  }
});

app.post('/', (req, res) => {
  // ... handles data submitted in the form
});

app.get('/', (req, res) => {
  /**
   * two jobs .render()
   * 1. Read template file from filesystem
   * 2. Fill in values for any placeholders
   */
  res.render('home', {
    locals: {
      title: 'Address Book App'
    },
    partials: {
      head: '/partials/head'
    }
  });
});

/* Express puts the value of the matched path in req.path
 for /friends = req.path
 inside locals obj, I'm sending friends var with value of db array of obj
  pass req.path (/friends) String to template friends-list.html.  Which gives us a path variable that can be used as a placeholder in our template.
*/
app.get('/friends', (req, res) => {
  res.render('friends-list', {
    locals: {
      title: 'Friends List',
      friends: db,
      path: req.path
    },
    partials: {
      head: '/partials/head'
    }
  });
});

app.get('*', (req, res) => {
  res.send('catch all address book');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});