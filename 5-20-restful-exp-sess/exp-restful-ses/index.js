const express = require('express');
const session = require('express-session');

const app = express();

// session cookie: hash str, track who I am in the browser
//  application > cookies > localhost, you can set exp date in millisec (maxAge)
// Middleware: what intercepts between req/res
// session() attaches session obj to the request obj
app.use(session({
  'secret': '3434lkjldkljljk3n',
  // 'maxAge': '5000'
}));

app.get('/heartbeat', (req, res) => {
  res.json({
    "at": "heartbeat!"
  });
});

// let persistedName = '';

app.get('/name', (req, res) => {
//   /**
//    * on url ?query name http://localhost:3030/name?name=cutie
//    */
  // let name = req.query.name
  // let { name } = req.query;
  let { name } = req.query;
  // req.session.name only gets written it doesn't exist otherwise
  //  if you move away from http://localhost:3030/name?name=cutie 
  //  to http://localhost:3030/name req.session.name exists
  // req.session.name = name;

  // if req.session.name doesn't exist - assign using req.query.name value
  if (!req.session.name) req.session.name = name;
  if (req.session.count === undefined) {
    req.session.count = 0;
  } else {
    req.session.count++;
  }

  console.log('req.session.name object: =====>', req.session.name);
  // req.session.name: =====> sweetie (?name=sweetie for my query)
  // req.session obj=> Session {
  //  cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
  // }
  // req.session.id is the cookie Value skip `s%3A`
  res.send(`
    <h1>Hello ${req.session.name}, you have visited this site ${req.session.count} times!</h1>
  `);
});

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello There!</h1>');
});

app.listen(3030, ()=> {
  console.log("running on port http://localhost:3030");
});