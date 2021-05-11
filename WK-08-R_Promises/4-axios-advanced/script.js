// YOUR API KEY HERE
const MW_API_KEY =  "" //<----- put your key here https://dictionaryapi.com/

// Fixed Items on my page
const dogDiv = document.getElementById('dog-image-div');
const checkoutBtn = document.getElementById('checkout-btn');
const generateDogBtn = document.getElementById('generate-dog-btn');


// HELPER FUNCTIONS
const disableCheckout = ()=> {
    checkoutBtn.disabled=true;
}

const enableCheckout = ()=> {
    checkoutBtn.disabled=false;
}

const addLoaderHtml = () => {
    dogDiv.innerHTML= `
    <h3>Loading your dog...</h3>
    <img src="./assets/Walk-128.gif" />
    `;
}

const addResultHtml = (dogName, result) => {
    dogDiv.innerHTML= `
    <h3>Your dog: ${dogName}</h3>
    <h4>Definition:</h4>
    <p>${result}</p>
    `;
}

const addErrorHtml = () => {
    dogDiv.innerHTML= `
    <h3>Sorry, we seem to have lost our API :,(</h3>
    <img src="./assets/Ghost-128.gif" />
    `;
}

const randomizer = (arr) => {
    const index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

const isApiBroken = () => {
    return Math.random()>0.5
}

const fetchWord = word => {
    axiosParams = { 
        params: {
            "key": MW_API_KEY
        }
    };
    return axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}`,
                     axiosParams)
}

// EVENT HANDLERS
generateDogBtn.addEventListener('click', ()=>{
    disableCheckout();
    addLoaderHtml();

    console.log("get a dog picture please");

    axios.get("https://dog.ceo/api/breeds/list/all")
    .then(res => {
        // Response info
        console.log(res.status);
        console.log(res.data);

        // Massage the data
        const dogNames = Object.keys(res.data.message);
        const myDog = randomizer(dogNames);

        console.log(`My dog name is ${myDog}`);

        if(isApiBroken()) {
            throw "Yikes"
        }

        fetchWord(myDog)
        .then( res => {
            console.log(res)
            addResultHtml(myDog, res.data[0].shortdef)
            enableCheckout()
        });

    })
    .catch( err => {
        // Gracefully Display an error here
        addErrorHtml();
    });
})

checkoutBtn.addEventListener('click', ()=>{
    console.log("MONEY PLEASE!");
})

