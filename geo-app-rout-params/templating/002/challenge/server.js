// 1. initialize express and templates
const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const morgan = require('morgan');

const app = express();
const logger = morgan('tiny');

const namesAndCapitals = require('./node_modules/country-json/src/country-by-capital-city.json');

// configure middleware (static file, https://learn.digitalcrafts.com/flex/lessons/back-end-foundations/express-middleware/#serving-static-files)
// app.use(express.static('public'));
app.use('/', express.static(__dirname + '/assets'));
app.use(logger);

// configure Template engine
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  });
});

app.get('/', (req, res) => {
  res.render('home', {
    locals: {
      title: 'Welcome to Geo-routing!'
    }
  });
});

const navs = [
  {
    isActive: false,
    href: 'countries/',
    name: 'All'
  },
  {
    isActive: false,
    href: 'countries/a-e',
    name: 'AE'
  },
  {
    isActive: false,
    href: 'countries/f-l',
    name: 'FL'
  },
  {
    isActive: false,
    href: 'countries/m-r',
    name: 'MR'
  },
  {
    isActive: false,
    href: 'countries/s-v',
    name: 'SV'
  },
  {
    isActive: false,
    href: 'countries/w-z',
    name: 'WZ'
  }  
];

// namesAndCapitals = [
//   {
//     "country": "Afghanistan",
//     "city": "Kabul"
// },
// {
//     "country": "Albania",
//     "city": "Tirana"
// },
// {
//     "country": "Algeria",
//     "city": "Alger"
// }]

// add class:"active" to nav array 
// result ex: one element in navs array: {isActive: false, href: "countries/w-z", name: "WZ", class: ""}
app.get('/countries', (req, res) => {
  res.render('list', {
    locals: {
      countries: namesAndCapitals,
      navs: navs.map(nav => {
              if(nav.name.toLowerCase().replace('/', '') === 'all') {
                nav['class'] = 'active';
              } else {
                nav['class'] = '';
              }
              return nav;
            })
    },
    partials: {
      header: 'header'
    }
  });
});

app.get('/countries/:selection', (req, res) => {
  /**
   * route param - req.params variable, it exists
   * where query.param is given by the user (search queary)
   */
  let results = [];
  let activePage = req.params.selection.toLowerCase().replace('-', '');
  console.log('Active Page req.params.selection: ====> ', req.params.selection)
  switch(req.params.selection.toLowerCase()) {
    case "a-e":
      results = namesAndCapitals.filter(x => x.country.toLowerCase().charCodeAt(0) >= 97 && x.country.toLowerCase().charCodeAt(0) <= 101 );
      break;
    case "f-l":
      results = namesAndCapitals.filter(x => x.country.toLowerCase().charCodeAt(0) >= 102 && x.country.toLowerCase().charCodeAt(0) <= 108 );
      break;
    case "m-r":
      results = namesAndCapitals.filter(x => x.country.toLowerCase().charCodeAt(0) >= 109 && x.country.toLowerCase().charCodeAt(0) <= 114 );
      break; 
    case "s-v":
      results = namesAndCapitals.filter(x => x.country.toLowerCase().charCodeAt(0) >= 115 && x.country.toLowerCase().charCodeAt(0) <= 118 );
      break; 
    case "w-z":
      results = namesAndCapitals.filter(x => x.country.toLowerCase().charCodeAt(0) >= 119 && x.country.toLowerCase().charCodeAt(0) <= 122 );
      break;
    default:
      results = ['Page not found.'];
  }

  res.render('list', {
    locals: {
      activePage,
      countries: results,
      navs: navs.map(nav => {
        if(nav.name.toLowerCase() === activePage) {
          nav['class'] = 'active';
        } else {
          nav['class'] = '';
        }
        return nav;
      })
    },
    partials: {
      header: 'header'
    }
  });
});

app.get('*', (req, res) => {
  // catch all route
  // page doesn't exist redirect to home
  res.status(404).redirect('/');
});

app.listen('7777', () => {
  console.log('The server is listening at http://localhost:7777');
});