const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json()); // body parser app/json
app.use(cookieParser('super secret'));

// middleware managing setting cookie and managing id for user next time visit
// secret is key let browser know this signin is coming from server.
app.use(session({
  secret: 'super secret',
  cookie: {maxAge: 60000}
}));

// ----------------------------------------------------------------------------
//                                session                                       
// ----------------------------------------------------------------------------
app.get('/', (req, res) => {
  /**
   * use JSON.stringify() to convert obj => string
   * Using a tab character (\t) mimics standard pretty-print appearance:
   *  by inserting \n new line, \t character
   */
  console.log(req.session);
  console.log("Hello World");
  res.send(`
  <h1>Hello world</h1>
  <h2>Session (on Server)</h2>
  <pre>${JSON.stringify(req.session, null, '\t')}</pre>
  <h2>Unsigned Cookies (from browser)</h2>
  <pre>${JSON.stringify(req.cookies, null, '\t')}</pre>
  <h2>Signed Cookies</h2>
  <pre>${JSON.stringify(req.signedCookies)}</pre>
  `);
});

// ----------------------------------------------------------------------------
//                                Set my user name                                       
// ----------------------------------------------------------------------------
app.get('/setmyusername', (req, res) => {
  req.session.username = "Harry Style";
  req.session.dogname = "Funny Bone";
  console.log("req.session: ====>", req.session);
  res.send(`<h1>You username is now Harry and dogname is Funny Bone.</h1>`);
});

// ----------------------------------------------------------------------------
//                                set cookie                                       
// ----------------------------------------------------------------------------
app.get('/setcookie', (req, res) => {
/**
 * Create signed cookie
 */
  res.cookie('password', 'cupcakes');
  res.cookie('code', 'buy june');
  res.send('I send your cookies');
});

// ----------------------------------------------------------------------------
//                                Signed Cookies                                       
// ----------------------------------------------------------------------------
app.get('/signedcookie', (req, res) => {
  /**
   * https://stackoverflow.com/questions/11897965/what-are-signed-cookies-in-connect-expressjs
   */
  res.cookie('secretname', 'KatieKim', {signed: true});
  console.log("req.signedCookies secret name: ====>", req.signedCookies['secretname']);
  res.send('<h1>Your signedCookie secretename is Katie Kim</h1>')
});

app.listen(3030, ()=> {
  console.log("Server runs on http://localhost:3030");
});