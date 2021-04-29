const userList = document.querySelector(".name-list");
const inputList = document.querySelector(".input-list");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function () {
  //Create an li out of thin air
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(inputList.value);

  //add the input value inside that new
  newLi.appendChild(liContent);

  //Attaching the li to the user list
  userList.appendChild(newLi);
});
