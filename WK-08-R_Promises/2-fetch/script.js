const generateDogBtn = document.getElementById('generate-dog-btn');

generateDogBtn.addEventListener('click', ()=>{

    console.log("get a dog picture please")

    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const dogDiv = document.getElementById('dog-image-div');

        const dogImageTag = document.createElement('img')
        dogImageTag.setAttribute('src', data.message)
        dogDiv.appendChild(dogImageTag);
      });

      console.log("im after the promise");

    // const dogDiv = document.getElementById('dog-image-div');

    // const dogImageTag = document.createElement('img')
    // dogImageTag.setAttribute('src', data.message)
    // dogDiv.appendChild(dogImageTag);

})

var checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', ()=>{
    console.log("MONEY PLEASE!");
})

