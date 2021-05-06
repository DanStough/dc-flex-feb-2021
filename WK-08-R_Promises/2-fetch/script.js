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
    

    // REPLACE ME AND LOG PROMISE
    // const request = new XMLHttpRequest();
    // request.open('GET', 'https://dog.ceo/api/breeds/image/random', false);  // `false` makes the request synchronous
    // request.send(null);

    // if (request.status === 200) {
    //     console.log(request.responseText);
    // }
    // const data= JSON.parse(request.responseText)

    // const dogDiv = document.getElementById('dog-image-div');

    // const dogImageTag = document.createElement('img')
    // dogImageTag.setAttribute('src', data.message)
    // dogDiv.appendChild(dogImageTag);

})

var checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', ()=>{
    console.log("MONEY PLEASE!");
})

