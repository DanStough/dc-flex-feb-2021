// Import stylesheets
// import "./style.css";
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","B","The Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","C","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo, Democratic Republic of the","Congo, Republic of the","Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","D","Denmark","Djibouti","Dominica","Dominican Republic","E","East Timor (Timor-Leste)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","F","Fiji","Finland","France","G","Gabon","The Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","H","Haiti","Honduras","Hungary","I","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","J","Jamaica","Japan","Jordan","K","Kazakhstan","Kenya","Kiribati","Korea, North","Korea, South","Kosovo","Kuwait","Kyrgyzstan","L","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","M","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia, Federated States of","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar (Burma)","N","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","O","Oman","P","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Q","Qatar","R","Romania","Russia","Rwanda","S","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","Sudan, South","Suriname","Sweden","Switzerland","Syria","T","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","U","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","V","Vanuatu","Vatican City","Venezuela","Vietnam","Y","Yemen","Z","Zambia","Zimbabwe"]
const price = [2000, 6300, 9850];
// start of Tourism Site
const appDiv = document.getElementById("app");

//div container
const containerDiv = document.createElement("div");
containerDiv.className = "container";
appDiv.appendChild(containerDiv);

//div nav bar
const navBarDiv = document.createElement("div");
navBarDiv.className = "nav-bar";
containerDiv.appendChild(navBarDiv);

//div links
const linkDiv = document.createElement("div");
linkDiv.className = "links";
navBarDiv.appendChild(linkDiv);

//p tag "drops"
const locations = document.createElement("p");
locations.className = "drop";
locations.innerText = "Locations";
const pricing = document.createElement("p");
pricing.className = "drop";
pricing.innerText = "Pricing";
const contact = document.createElement("p");
contact.className = "drop";
contact.innerText = "Contact Us";

linkDiv.appendChild(locations);
linkDiv.appendChild(pricing);
linkDiv.appendChild(contact);

//div profile
const profileDiv = document.createElement("div");
containerDiv.appendChild(profileDiv);
profileDiv.className = "profile";
const profilePic = document.createElement("img");
profilePic.src = "https://picsum.photos/id/64/600/";
profileDiv.appendChild(profilePic);


//div for image and text
const main = document.createElement('div');
main.className = 'main';
containerDiv.appendChild(main);
//image for background
const image = document.createElement("img");
image.src = "https://picsum.photos/id/1015/320/568";
main.appendChild(image);

//div textContainer
const textContainerDiv = document.createElement("div");
textContainerDiv.className = "text-container";
main.appendChild(textContainerDiv);

const headingOne = document.createElement("h1");
headingOne.innerText = "Norway is Calling";
const subHeadingOne = document.createElement("p");
subHeadingOne.innerText = "Book Now";

textContainerDiv.appendChild(headingOne);
textContainerDiv.appendChild(subHeadingOne);

//div footer
const footerDiv = document.createElement("div");
footerDiv.className = "footer";
containerDiv.appendChild(footerDiv);
const footHeadOne = document.createElement("h6");
footHeadOne.innerText = "Privacy Policy";
footerDiv.appendChild(footHeadOne);


// button to change country name
// const button = document.createElement('button');
// button.innerText = "Change Country"
// appDiv.appendChild(button);
let countIndex = 0
image.addEventListener('click', function(){
  headingOne.innerText = `${countries[countIndex]} is Calling`;
  countIndex++;
  if(countIndex === countries.length){
    countIndex =0;
  }
})
// countries.forEach(function(item){console.log(item)});


// Locations page
locations.addEventListener('click', function(){
  main.innerText="";
  const ul = document.createElement('ul');
  ul.className = 'countries';
  main.appendChild(ul);

  for(let i=0; i<countries.length; i++){
    const li = document.createElement('li');
    li.innerText= countries[i];
    ul.appendChild(li);
  }
})

pricing.addEventListener('click', function(){
  main.innerText='';
  const ul = document.createElement('ul');
  ul.className = 'prices';
  main.appendChild(ul);

  for(let i=0; i<price.length; i++){
    const li = document.createElement('li');
    li.innerText = `Price: ${price[i]}`;
    ul.appendChild(li);
  }
})

contact.addEventListener('click', function(){
  main.innerText = '';
  const pContact = document.createElement('p');
  pContact.className = 'contacts';
  main.appendChild(pContact);

  pContact.innerHTML= `Please contact us using the following methods. \n
  Phone: 111-222-3333 \n
  Email: thisIsAnEmail@email.com`;
})

