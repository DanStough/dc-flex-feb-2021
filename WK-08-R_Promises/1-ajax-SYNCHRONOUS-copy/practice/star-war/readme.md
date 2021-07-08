## get the data from dog ceo api
1. promise
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(date => console.log(data))


https://dog.ceo/dog-api/