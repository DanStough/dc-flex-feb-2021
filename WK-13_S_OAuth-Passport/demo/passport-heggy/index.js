require('dotenv').config() // loads dotenv
// console.log("it's working");
const express = require('express');
const session = require('express-session');

const app = express();

// cookie expires so we have to re-login.
// secret is key let browser know this signin is coming from server.
const sess = {
  secret: 'keyboard cat',
  cookie: {maxAge: 60000}
};
// Setup session middleware
app.use(session(sess));

// process.env.<key>
console.log('GITHUB_CLIENT_ID: ===>', process.env.GITHUB_CLIENT_ID);

app.get('/', (req, res) => {
  console.log("you are on root!");
  res.send("<h1>YEs you are on root!!</h1>")
});

app.listen(7070, () => {
  console.log("port up on http://localhost:7070");
});