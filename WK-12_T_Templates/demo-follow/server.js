const express = require('express');
const es6Renderer = require('express-es6-template-engine');


const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.get("/donuts/:id", (req, res)=>{
  donuts
  
  res.send(req.params.id);
})

app.get('/home', (req,res)=>{
  res.render('home',{
    locals: {
      title: "the server side render title (cool addition)"
    }
  })
})

app.get('*', (req,res)=>{
  res.send("catch all");
})

app.listen(3200, ()=>{
  console.log("running on port 3200");
})