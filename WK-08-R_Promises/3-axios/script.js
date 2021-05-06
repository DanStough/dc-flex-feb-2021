const generateDogBtn = document.getElementById('generate-dog-btn');

// console.log(axios);

generateDogBtn.addEventListener('click', ()=>{

    // const dogDiv = document.getElementById('dog-image-div');
    // dogDiv.innerHTML = `<h3>LOADING....</h3>`;
    console.log("get a dog picture please");

    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        console.log("response.data", res.data);
        console.log("response.data.message", res.data.message);
        const dogDiv = document.getElementById('dog-image-div');

        dogDiv.innerHTML = `<img src="${res.data.message}">`;
    })
    .catch( err => console.error(err) );

})

var checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', ()=>{
    console.log("MONEY PLEASE!");
})

