const generateDogBtn = document.getElementById('generate-dog-btn');

generateDogBtn.addEventListener('click', ()=>{

    // THIS IS OLD SCHOOL
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dog.ceo/api/breeds/image/randomdsfsfds', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        console.log(request.responseText);
    }
    const data= JSON.parse(request.responseText)

    const dogDiv = document.getElementById('dog-image-div');

    const dogImageTag = document.createElement('img')
    dogImageTag.setAttribute('src', data.message)
    dogDiv.appendChild(dogImageTag);

})

var checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', ()=>{
    console.log("MONEY PLEASE!");
})

