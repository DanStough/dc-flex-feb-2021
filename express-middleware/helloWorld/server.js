const http = require('http');
const express = require('express');
const helmet = require('helmet');

const app = express();
const server = http.createServer(app);

const HOST = '127.0.0.1';
const PORT = 3000;

const es6Renderer = require("express-es6-template-engine"); // dependency since no relative file path, we import the module and assign it to the var
app.engine('html', es6Renderer); // register the template engine function and associate it with html files
app.set('views', 'templates'); // tell Express to look in the templates dir for the template ("view") files
app.set('view engine', 'html'); // set html template engine (es6Renderer as the default for this app)

/**
 * https://learn.digitalcrafts.com/flex/lessons/back-end-foundations/express-middleware/#logging-middleware
 * use tiny configuration morgan prints:
 * Request Method
Request path
Response Status Code
The Response length (in bytes)
How long it took to process the Request and send the Response
 * */
const morgan = require('morgan');
const logger = morgan('tiny');
app.use(logger);
// configure express.static and pass the result to app.use()
app.use(express.static('public'));
// helmet sets your HTTP Response headers appropriately, protecting your app from well-known vulnerabilities.
app.use(helmet());

// app.all('*', (req, res, next) => {
//   console.log(`req.method: ${req.method}, req.path: ${req.path}`);
//   next();
// });

app.use((req, res, next) => {
  console.log(`req.method: ${req.method} req.path: ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.render('index');
});

server.listen(PORT, HOST, () => {
  console.log(`Listening on http://${HOST}:${PORT}`);
});