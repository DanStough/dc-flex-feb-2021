const axios = require('axios');

/**
 * after .get() promise resolves => then take resp
 *  and turn it into json => then take json data print 
 *  it out.
 */
// axios.get('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.data)
//   .then(data => console.log('response.data field: ====>', data))
//   .catch(err => console.log(error));

// console.log("When am I executed?"); // exec before .then api promises.

/**
 * New JS feature async/await, async indicates this func
 *   has promises and run them in order.
 * Place await for any promise, wait for this promise to
 *   finish.  When it finishes, give me response obj
 * `await` means don't run the next line until it finishes
 */
// const getDogImage = async () => {
//   // return response obj once axios promise finishes
//   const response = await axios.get('https://dog.ceo/api/breeds/image/random');
//   let data = response.data;
//   console.log('async await ++++ response.data field: ====>', data);
//   console.log("When am I executed?");

// };

// getDogImage();

/**
 * async await ++++ response.data field: ====> {
  message: 'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_4232.jpg',
  status: 'success'
}
When am I executed?
 */

/**
 * async/await enables you to make 2 api calls in 
 *   one same function call. (https://dog.ceo/dog-api/documentation/)
 * 1. Dog api list all breeds (https://dog.ceo/api/breeds/list/all)
 * 2. Dog api By breed (https://dog.ceo/api/breed/hound/images)
 */

const getDogImgBreed = async () => {
  // error catch
  try {
    // first api call, get list all breeds
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    // console.log('async await ++++ list of all breeds first api call response: ====>', response);
    let data = response.data.message;
    console.log('async await ++++ list of all breeds first api call response.data.message field: ====>', data);
  }
  catch(err) {
    console.log(err);
  }

  /**
   * response.data.message = {
  affenpinscher: [],
  african: [],
  ...
  boxer: [],
  brabancon: [],
  briard: [],
  buhund: [ 'norwegian' ],
  bulldog: [ 'boston', 'english', 'french' ]
   }
   */
  // get a one dog randomly
  let breedsArr = Object.keys(data); // ==> ["buhund", "bulldog", "greyhound", "hound", "schnauzer", "setter", "sheepdog"]
  let randomIndex = Math.floor(Math.random() * breedsArr.length); // ==> 0 thru last index of array, Math.floor to get the whole number, round it down.
  console.log('random dog breed: ======> !!!!', breedsArr[randomIndex]); // => random dog name: ======> !!!! corgi
  let randomDogBreedStr = breedsArr[randomIndex]; 
  // second api call
  // https://dog.ceo/api/breed/hound/images
  const response2 = await axios.get(`https://dog.ceo/api/breed/${randomDogBreedStr}/images`);
  const data2Arr = response2.data.message;
  console.log('async await ++++ list of hound breeds second api call response.data.message field pictures: ====>', data2Arr);
  // => pictures: ====> [
  // 'https://images.dog.ceo/breeds/newfoundland/n02111277_1008.jpg',
  // 'https://images.dog.ceo/breeds/newfoundland/n02111277_10160.jpg',
  // 'https://images.dog.ceo/breeds/newfoundland/n02111277_1018.jpg']
};

const getDogImgBreed = async () => {
  // first api call, get list all breeds
  const response = await axios.get('https://dog.ceo/api/breeds/list/all');
  // console.log('async await ++++ list of all breeds first api call response: ====>', response);
  let data = response.data.message;
  console.log('async await ++++ list of all breeds first api call response.data.message field: ====>', data);

  /**
   * response.data.message = {
  affenpinscher: [],
  african: [],
  ...
  boxer: [],
  brabancon: [],
  briard: [],
  buhund: [ 'norwegian' ],
  bulldog: [ 'boston', 'english', 'french' ]
   }
   */
  // get a one dog randomly
  let breedsArr = Object.keys(data); // ==> ["buhund", "bulldog", "greyhound", "hound", "schnauzer", "setter", "sheepdog"]
  let randomIndex = Math.floor(Math.random() * breedsArr.length); // ==> 0 thru last index of array, Math.floor to get the whole number, round it down.
  console.log('random dog breed: ======> !!!!', breedsArr[randomIndex]); // => random dog name: ======> !!!! corgi
  let randomDogBreedStr = breedsArr[randomIndex]; 
  // second api call
  // https://dog.ceo/api/breed/hound/images
  const response2 = await axios.get(`https://dog.ceo/api/breed/${randomDogBreedStr}/images`);
  const data2Arr = response2.data.message;
  console.log('async await ++++ list of hound breeds second api call response.data.message field pictures: ====>', data2Arr);
  // => pictures: ====> [
  // 'https://images.dog.ceo/breeds/newfoundland/n02111277_1008.jpg',
  // 'https://images.dog.ceo/breeds/newfoundland/n02111277_10160.jpg',
  // 'https://images.dog.ceo/breeds/newfoundland/n02111277_1018.jpg']
};

let promise = getDogImgBreed();
console.log(promise); // IOU => Promise { <pending> }
console.log("I'm here!");

