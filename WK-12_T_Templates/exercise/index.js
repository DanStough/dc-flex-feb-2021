
// 1. initialize express and templates
const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const details = require('./dataArray');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const data = require('./dataArray')
// console.log(data)

// 4. Detail page here. 
app.get("/details/:id", (req, res) => {
  const detail = details[req.params.id]

  if(!detail){
      res.status(404).send("details not found")
  }

  res.render("details", {
      locals: {
          detail
      }
  })
})


// 5. List page here

app.get('/home', (req,res)=>{
  
  const detailIds = Object.keys(details)
  const newDetailArray = detailIds.map( id => details[id])

  res.render('home', {
    locals: {
        title: 'FaceGram Home Page',
        people: newDetailArray
    }
})
})

// 3. Write out a route to test your server is working
app.get('/heartbeat', (req,res)=>{
  res.send('This server is running and the page is showing')
})

app.get('*', (req,res)=>{
  res.send('catch all')
})

app.listen('3030',()=>{
  console.log("server is running on port 3030")
})
// 2. Start your express server
