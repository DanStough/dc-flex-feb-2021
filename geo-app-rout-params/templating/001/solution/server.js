const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const morgan = require('morgan');

const app = express();
const logger = morgan('tiny');

// country-json npm pakage
const namesAndCapitals = require('./node_modules/country-json/src/country-by-capital-city.json');
const populations = require("./node_modules/country-json/src/country-by-population.json");

app.use(express.static(__dirname + '/public'));
app.use(logger);

// https://www.npmjs.com/package/express-es6-template-engine#setup-with-express
app.engine('html', es6Renderer);
app.set('views', 'templates'); // when looking for views => go to dir:templates
app.set('view engine', 'html');

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  });
})

const handleGeoQuery = (capital, name) => {
  if(capital && name) {
    return ['Searching by country name and capital is not allowed.']
  } else if(name) {
    return namesAndCapitals.filter(x => x.country && x.country.toLowerCase().indexOf(name.toLowerCase()) > -1);
  } else {
    return namesAndCapitals.filter(x => x.city && x.city.toLowerCase().indexOf(capital.toLowerCase()) > -1);
  }
};

const handlePopQuery = (maxpop, minpop) => {
  if(!maxpop || !minpop) {
    return ['Searching by population requires both a minimum and a maximum value.']
  } else {
    maxpop += '000000';
    minpop += '000000';
    return populations.filter(x => x.population && x.population >= minpop && x.population <= maxpop);
  }
}

app.get('/countries', (req, res) => {
  let results = [];
  let { capital, maxpop, minpop, name } = req.query;
  if(capital || name) {
    results = handleGeoQuery(capital, name);
  } else if(maxpop || minpop) {
    results = handlePopQuery(maxpop, minpop);
  } else if(Object.keys(req.query).length === 0) {
    results = namesAndCapitals;
  } else {
    results = ['The query param is not recognized'];
  }

  res.render('home', {
    locals: {
      countries: results
    }
  });
})

app.listen('8080', () => {
  console.log('The server is listening at port 8080');
})