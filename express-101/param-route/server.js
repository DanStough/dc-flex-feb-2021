const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello!!');
});

app.get('/greet/:handle', (req, res) => {
  // object obj destructuring, let handle = req.params.handle = heggy if route /greet/heggy
  const {handle} = req.params;
  res.send(`Hello, ${handle}!`);
});

server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}/`);
});