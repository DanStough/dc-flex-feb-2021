let content = document.getElementById('todo-list');


let myFormContent = document.getElementById('my-form');
console.log('my Form Content', myFormContent);

myFormContent.addEventListener("submit", event => {
  event.preventDefault();
  // event.target is the form 
  const formData = new FormData(event.target);
  // console.log('formData:', formData );
  const entries = formData.entries();
  // data is JS OBJ
  const data = Object.fromEntries(entries);
  // debugger;
  // console.log('my form data in js obj', data);
  // "Nat"
  debugger;
  content.innerHTML = data.todo;
  let myList = [];
  myList.push(data.todo);
  content.innerHTML = myList;
});