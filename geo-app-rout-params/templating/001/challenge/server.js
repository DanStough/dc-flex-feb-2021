// put the server.js solution here
// dependency doesn't have the relative path
const express = require('express');
const es6Renderer = require('express-es6-template-engine');

// instantiate express() method
const app = express();

const namesAndCapitals = require('./node_modules/country-json/src/country-by-capital-city.json');
const populations = require('./node_modules/country-json/src/country-by-population.json');

// middleware - `.use` is sure-sign that this is middleware
// __dirname is root of the project, Server will look inside public for static file
app.use(express.static(__dirname + '/public'));

// es6Renderer templating
app.engine('html', es6Renderer);
app.set('views', 'templates'); // when looking for views => dir:templates folder
app.set('view engine', 'html');

app.get('/heartbeat', (req, res) => {
  res.json({
    "is" : "listening"
  });
});

const handleGeoQuery = (capital, name) => {
  if(capital && name) {
    // result is expecting an array
    return ['Searching by country name and capital is not allowed.'];
  // only country name
  } else if (name) {
    return namesAndCapitals.filter( x => {
      // if x.country name, if there is a match of req.param.name just filter those array of items.
      return x.country && x.country.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
  // only capital city
  } else {
    return namesAndCapitals.filter( x => {
      // if x.capital exists, if there is a match of req.param.capital just filter those array of items.
      return x.city && x.city.toLowerCase().indexOf(capital.toLowerCase()) > -1;
    });
  }
};

const handlePopQuery = (maxpop, minpop) => {
  // we need to have both param maxpop and minpop
  if (!maxpop || !minpop) {
    return ['Searching by population requires both max, min values.'];
  } else {
      // convert param data into milions (data unit is in millions)
      maxpop += '000000';
      minpop += '000000';
    return populations.filter( x => {
      return x.population && x.population >= minpop && x.population <= maxpop;
    });
  }
};

app.get('/countries/a-e', (req, res) => {
  // filter only countries name start with a 
  let namesAE =  namesAndCapitals.map(item => {
    console.log(item.country);
    if (
      item.country.charAt(0) === 'A' ||
      item.country.charAt(0) === 'B' ||
      item.country.charAt(0) === 'C' ||
      item.country.charAt(0) === 'D' ||
      item.country.charAt(0) === 'E'
    ) {
      console.log('after!!!!!!! $$$$$$$$', item.country);
      return item;
    }
  });

  res.send(namesAE);
});

app.get('/countries/f-l', (req, res) => {
  // filter only countries name start with a 
  let namesFL =  namesAndCapitals.map(item => {
    console.log(item.country);
    if (
      item.country.charAt(0) === 'F' ||
      item.country.charAt(0) === 'G' ||
      item.country.charAt(0) === 'H' ||
      item.country.charAt(0) === 'I' ||
      item.country.charAt(0) === 'J' ||
      item.country.charAt(0) === 'K' ||
      item.country.charAt(0) === 'L'
    ) {
      console.log('after!!!!!!! $$$$$$$$', item.country.charAt(0));
      return item;
    }
  });
  res.send(namesFL);
});

app.get('/countries', (req, res) => {
  let results = namesAndCapitals;
  // setting query param ?name, setting let capital = req.query.capital
  //  getting its values out of param capital we pass
  let { capital, maxpop, minpop, name } = req.query;
  // console.log('req.query.name: ', name);
  // console.log('req.query.capital: ', capital);
  // console.log("maxpop minpop !!!!!*************", maxpop, minpop);
  // localhost:8080/countries?max=400&min=20

  // distinguish btwn capital & name or maxpop & minpop
  if(capital || name) {
    results = handleGeoQuery(capital, name);
  } else if(maxpop || minpop) {
    results = handlePopQuery(maxpop, minpop);
  // nonsensical query param blah: blah
  } else if (Object.keys(req.query).length === 0){
    results = namesAndCapitals;
  } else {
    results = ['The query param is not recognized.'];
  }
  res.render('home', {
    locals: {
      countries: results
    }
  });
});

app.get('/count', (req, res) => {
  res.json(namesAndCapitals);
});

app.get('/pop', (req, res) => {
  res.json(populations);
});

app.listen('8000', () => {
  console.log('The server is running at port 8000');
});