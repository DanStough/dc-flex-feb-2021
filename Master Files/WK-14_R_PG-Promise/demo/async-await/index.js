const axios = require('axios');

// axios.get('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.data)
//     .then(data => console.log(data));

// console.log("When am I executed?")

async function hello() {
    console.log("hello")
}

const getDogImage = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    const data = response.data.message
    // console.log(data)

    const breeds = Object.keys(data);
    const index = Math.floor(Math.random()*breeds.length)

    console.log("Random breed " + breeds[index])

    const response2 = await axios.get(`https://dog.ceo/api/breed/${breeds[index]}/images`);

    console.log(response2.data);
}

let promise = getDogImage();
console.log(promise);
console.log("I'm here");
