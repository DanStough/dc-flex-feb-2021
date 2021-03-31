const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "B",
  "The Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "C",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Côte d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "D",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "E",
  "East Timor (Timor-Leste)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "F",
  "Fiji",
  "Finland",
  "France",
  "G",
  "Gabon",
  "The Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "H",
  "Haiti",
  "Honduras",
  "Hungary",
  "I",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "J",
  "Jamaica",
  "Japan",
  "Jordan",
  "K",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "L",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "M",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia, Federated States of",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "N",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "O",
  "Oman",
  "P",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Q",
  "Qatar",
  "R",
  "Romania",
  "Russia",
  "Rwanda",
  "S",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Sudan, South",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "T",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "U",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "V",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Y",
  "Yemen",
  "Z",
  "Zambia",
  "Zimbabwe"
  ];

// Begin the assignment
const appDiv = document.getElementById('app');
// First div container
const containerDiv = document.createElement('div');
containerDiv.className = "container";
appDiv.appendChild(containerDiv);
// nav-bar class within container
const navBarDiv = document.createElement('div');
navBarDiv.className = "nav-bar";
containerDiv.appendChild(navBarDiv);
// nav-items class within the nav-bar
const navItemsDiv = document.createElement('div');
navItemsDiv.className = "nav-items";
navBarDiv.appendChild(navItemsDiv);
// p tags with class of item within nav-items
const locations = document.createElement('p');
locations.className = "item";
locations.innerText = "Locations";
const pricing = document.createElement('p');
pricing.className = "item";
pricing.innerText = "Pricing";
const contactUs = document.createElement('p');
contactUs.className = "item";
contactUs.innerText = "Contact Us";

navItemsDiv.appendChild(locations);
navItemsDiv.appendChild(pricing);
navItemsDiv.appendChild(contactUs);

// avatar class that consists of woman picture
const avatarDiv = document.createElement('div');
avatarDiv.className = "avatar";
containerDiv.appendChild(avatarDiv);
// picture of woman within avatar div
const avatarPic = document.createElement('img');
avatarPic.src = "https://picsum.photos/id/64/600/";
avatarDiv.appendChild(avatarPic);

const main = document.createElement('div');
main.className = "main";
containerDiv.appendChild(main);

// Image within the container div
const mainImage = document.createElement('img');
mainImage.src = "https://picsum.photos/id/1015/320/568";
main.appendChild(mainImage);
// text-container class
const textContainer = document.createElement('div');
textContainer.className = "text-container";
main.appendChild(textContainer);
// H1 and p tags within text-container class
const headerOne = document.createElement('h1');
headerOne.innerText = "Norway is Calling";
const paragraphOne = document.createElement('p');
paragraphOne.innerText = "Book Now";

textContainer.appendChild(headerOne);
textContainer.appendChild(paragraphOne);

// Footer div
const footerDiv = document.createElement('div');
footerDiv.className = "footer";
containerDiv.appendChild(footerDiv);
const footerParagraph = document.createElement('p');
footerParagraph.innerText = "Private Policy";
footerDiv.appendChild(footerParagraph);

// button to change country name
// const button = document.createElement('button');
// button.innerText = "Change Country";
// app.appendChild(button);

let counter = 0;

mainImage.addEventListener('click', function() {
  headerOne.innerText = countries[counter];
  console.log(counter);
  counter++;
})

locations.addEventListener('click', function() {
  const ul = document.createElement('ul');
  ul.className = "countries";
  main.innerText= "";
  main.appendChild(ul);
  for(let i = 0; i < countries.length; i++) {
    const li = document.createElement('li');
    li.innerText = countries[i];
    ul.appendChild(li);
  }
})

pricing.addEventListener('click', function() {
  const ul = document.createElement('ul');
  ul.className = "countries";
  main.innerText= "";
  main.appendChild(ul);
  for(let i = 0; i < countries.length; i++) {
    const li = document.createElement('li');
    li.innerText = countries[i];
    ul.appendChild(li);
  }
})

contactUs.addEventListener('click', function() {
  const ul = document.createElement('ul');
  ul.className = "countries";
  main.innerText= "";
  main.appendChild(ul);
  for(let i = 0; i < countries.length; i++) {
    const li = document.createElement('li');
    li.innerText = countries[i];
    ul.appendChild(li);
  }
})

// written as anon function
// const someFn = function() {
//   alert('button clicked');
// }

// button.addEventListener('click', someFn);