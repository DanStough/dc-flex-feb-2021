const dogImgDiv = document.getElementById('dog-image-div');
const dogNowBtn = document.getElementById('give-me-dog');

dogNowBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    const imgPath = data.message;
    insertDogImg(imgPath);
  })
  .catch(err => { throw err });
});

// const somePath = "https://placekitten.com/g/300/200"

const insertDogImg = imgPath => {
  dogImgDiv.innerHTML = `
    <img src="${imgPath}">
  `;
}

// insertDogImg(somePath);

// step 1
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => { throw err });