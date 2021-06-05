const http = require('http');
const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();
const server = http.createServer(app);

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.send('whee sung!');
});

app.get('/greet/:handle', (req, res) => {
  // handle = req.params.handle
  const { handle } = req.params;
  // res.send(`<h1>hello! ${handle}</h1>`);
  res.render('home', {
    locals: {
      // handle: req.params.handle
      title: `${handle}`
    }
  });
});

app.get('*', (req, res) => {
  res.send('catch all wheesong');
});

server.listen(port, hostname, () => {
  console.log(`Sever running at http://${hostname}:${port}`);
});