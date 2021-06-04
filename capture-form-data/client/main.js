// alert("I am hooked!");
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // alert('got it');
  // e.target is form itself
  // console.log('e.target: ', e.target);
  const data = new FormData(e.target);
  // console.log('data: ', data);
  const stringified = stringifyFormData(data);
  console.log('stringified:', stringified);
  /**
   * stringified: {
      "name": "heggy",
      "address": "111 front st",
      "phone": "3333333",
      "email": "k@g.com"
     }
   */
});

// https://developer.mozilla.org/en-US/docs/Web/API/FormData formData
const stringifyFormData = fd => {
  const data = {};
  // for...of loop just obj
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }

  // formData needs to be converted 
  return JSON.stringify(data, null, 4);
};