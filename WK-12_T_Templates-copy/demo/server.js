const express = require("express");
const es6Renderer = require('express-es6-template-engine');

const donuts = require("./donuts");
// console.log('####### donuts!!!!!!! ###### ####!!!!', donuts);

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// console.log('env var process.env !!!!!! ****** !!!!!', process.env);

const name = "heggy";

app.get("/home", (req, res) => {
  // need data first
  // fetch() or do a api call axios()
  // axios()

  // OR, need data from database
  // db.get("data")
  res.render('home', {
    locals: {
      title: `${name}'s super nice donut shop!`
    }
  });
});

app.get("/donuts/:id", (req, res) => {
  // obj destructuring: let id = req.params.id = 0123
  const {id} = req.params;
  // one donut obj => donuts[id]
  const donut = donuts[id];
  // const donut = donuts[req.params.id];
  console.log(`single donut obj matching req.param.id (${id}): ##### !!!!! ****`, donut);
  // console.log("req.params.id !!!!!!! ******: ", id);
  // console.log(`ID: ${id} donut object ==> !!!!!!! ******: `, donuts[id]);

  if (!donut) {
    /**
     * if donuts[id] doesn't exist or undefined
     */
    // res.status(404)
    //    .send(`Donut Error: No donut with id: ${id}`);
    // redirect user to not found page
    res.status(404)
       .render('notfound');
  } else {
    /**
     * if donut[id] found then render static donut.html
     * and pass donut: donut value (shorthand notation)
     */
    res.render('donut', {
      locals: {
        donut
      }
    });
  }
});

/**
 * Express assigns value for matched path in `req.path`
 * /donuts = req.path
 * inside locals obj, I'm sending donuts var w/ values as donuts obj
 */
app.get('/donuts', (req, res) => {
  // returns array of donut ids
  const donutsIdArray = Object.keys(donuts);
  // returns array of each donut obj (donuts[id])
  const newDonutsArray = donutsIdArray.map(id => donuts[id]);

  res.render('donuts-list', {
    locals: {
      title: `List of donuts`,
      donuts: newDonutsArray,
      path: req.path
    }
  });
});

app.get("*", (req, res) => {
  res.send("<h1>catch all</h1>");
});

app.listen(3000, () => {
  console.log("runs on 3000");
});