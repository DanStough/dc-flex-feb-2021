const express = require('express');
// things with no file path refers to installed packages inside package.json
const es6Renderer = require('express-es6-template-engine');
// this is file needs file path!
const donutsOBJ = require('./donuts');

const app = express();

// configure template engine
app.engine('html', es6Renderer);
app.set('views', 'templates');  // set directory to process templates
app.set('view engine', 'html');

// env variable how to save and retrieve
//  write it in the package.json script
console.log("process.env: ", process.env);
console.log("######### $$$$$$$$$$$ process.env.DC_TEST: =======> !!!!!!!!!!!", process.env.SUPER_SECRET_PWD);

console.log("donutsOBJ HERE ~~~~~~~~~~~!!!!!! ", donutsOBJ);

// 4. Detail page here:

// 5. List page here
app.get('/home', (req, res) => {
  // need data first, get from external api
  // axios()
  //  OR, need data from Database
  // db.get("data")

  // Object.keys(obj) => [id, id, id] => [ '0123', '0124', '0125' ]
  const profileIds = Object.keys(donutsOBJ);
  // get each profileID value data[id]
  const profileArray = profileIds.map(id => donutsOBJ[id]);
  // console.log("list of ProfileIDs HERE ~~~~~~~~~~~!!!!!! ", profileIds);
  // console.log("list of ProfileArray HERE ~~~~~~~~~~~!!!!!! ", profileArray);
  // insert profileArray
  res.render('home', {
    locals: {
      title: "All About Donuts",
      profileArray
    }
  }); // render html file under template dir
});

app.get('*', (req, res) => {
  res.send('catch all');
});

app.listen(3000, () => {
  console.log('runs on port 3000');
});