// alert('heggy');
const handleSubmit = event => {
  // keep from pg to re-fresh since we want to create single page apps
  //  dont want to send data to backend.
  event.preventDefault();
  const data = new
}


// 1. grab the form
const form = document.getElementById("form");
// 2. add the event listener, type = submit
form.addEventListener('submit', handleSubmit);