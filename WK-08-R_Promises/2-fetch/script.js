const generateDogBtn = document.getElementById('generate-dog-btn');

generateDogBtn.addEventListener('click', ()=>{
    // const h3 = document.createElement('h3');
    // h3.innerText = 'Loading...';

    const dogDiv = document.getElementById('dog-image-div');
    dogDiv.innerHTML = `<h3>LOADING....</h3>`;
    // console.log("get a dog picture please");

    // Using Fetch API - https://developer.mozilla.org/en-US/docs/Web/API/
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            dogDiv.innerHTML = `<img src=${data.message}>`;
        })
        .catch(err => {throw err});



    // console.log("I am after the fetch promise!");
    

    fetch("https://dog.ceo/api/breeds/image/random")
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
})

var checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', ()=>{
    console.log("MONEY PLEASE!");
})

