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
    res.render("donut");
  }
});

app.get("*", (req, res) => {
  res.send("<h1>catch all</h1>");
});

app.listen(3000, () => {
  console.log("runs on 3000");
});