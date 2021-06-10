# [pg-promise](https://learn.digitalcrafts.com/flex/lessons/databases/pg-promise/#overview)


## steps to implement pg-promise
- start from what we know about promise (axios api call)
    promises: functions as when we make api call, => get result 
      => catch it by using .then => finally we process the resulting data

  * [axios](https://www.npmjs.com/package/axios#installing)

* goal - get dog photo URL (https://dog.ceo/api/breeds/image/random), this end point returns json
  ex) 
```json  
  {
    "message": "https://images.dog.ceo/breeds/setter-gordon/n02101006_615.jpg",
    "status": "success"
  }
```

```js
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345') // axios.get('<URL endpoint>')
  .then(function (response) {
    // handle success
    console.log('response: ====>', response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

- Next, we want to process the response
    * go to using fetch api (https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
    - get the basic fetch request and put it after axios.get()
```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```



```js
axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    // handle success
    console.log('response: ====>', response);
    console.log('response.data: ====> *******!!!!!!', response.data);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .then(() => {
    // always executed
  });
```
response.data: ====> *******!!!!!! {
  message: 'https://images.dog.ceo/breeds/malamute/n02110063_1058.jpg',
  status: 'success'
}

* combine axios.get() and fetch().then()
```js
axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => console.log(data));
```

* Dog api obj
let mydata = {
  buhund: [ 'norwegian' ],
  bulldog: [ 'boston', 'english', 'french' ],
  greyhound: [ 'italian' ],
  hound: [
    'afghan', 'basset',
    'blood',  'english',
    'ibizan', 'plott',
    'walker'
  ],
  schnauzer: [ 'giant', 'miniature' ],
  setter: [ 'english', 'gordon', 'irish' ],
  sheepdog: [ 'english', 'shetland' ]
};

- To get the same effect for older syntax using axios.get().then() nested call: 

```js
axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => response.data)
  .then(data => {
    axios.get('https://dog.ceo/api/breed/hound/images')
  });
```