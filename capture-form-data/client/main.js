// alert("I am hooked!");
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // alert('got it');
  // e.target is form itself
  // console.log('e.target: ', e.target);
  const data = new FormData(e.target);
  // console.log('data: ', data);
  // we stringify data so that we could read it in the console
  const formattedData = formatData(data);
  // Example POST method implementation: 
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  // sendData(<endpoint str>, <data obj>)
  sendData('http://localhost:8080/newcontact', formattedData);
});

// https://developer.mozilla.org/en-US/docs/Web/API/FormData formData
const formatData = fd => {
  const data = {};
  // for...of loop just obj
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return data;
};

// post method implementation https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options
// async/await doesn't block while waiting for response
const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response;
}

// async function postData(url, data) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }