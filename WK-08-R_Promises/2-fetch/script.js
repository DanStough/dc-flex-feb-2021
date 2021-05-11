const generateDogBtn = document.getElementById('generate-dog-btn');

generateDogBtn.addEventListener('click', ()=>{

    console.log("get a dog picture please")

    fetch("https://dog.ceo/api/breeds/image/random")
<<<<<<< HEAD
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

=======
        .then(response => response.json())
        .then(data => {
            console.log(data);
    
            // console.log(res.data.myLittle.pony) // This will throw an error
            const dogDiv = document.getElementById('dog-image-div');
    
            // // This is adding an element
            // const dogImageTag = document.createElement('img')
            // dogImageTag.setAttribute('src', data.message)
            // dogDiv.appendChild(dogImageTag);
    
            // This is replacing an element
            dogDiv.innerHTML= `<img src="${data.message}" />`;
        })
        .catch( err => {
            // Gracefully Display an error here
            const dogDiv = document.getElementById('dog-image-div');
            dogDiv.innerHTML= `<h1>Woops</h1>`;
        });
>>>>>>> main
})

var checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', ()=>{
    console.log("MONEY PLEASE!");
})

