// import stylesheets
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
const app = document.getElementById("app");

const container = document.createElement('div');
container.className = "container";
app.appendChild(container);

const nav = document.createElement('nav');
container.appendChild(nav);

const navs = document.createElement('ul');
navs.className = "navs";
nav.appendChild(navs);

const locations = document.createElement('li');
locations.innerText = "locations";
navs.appendChild(locations);

const pricing = document.createElement('li');
pricing.innerText = "pricing";
navs.appendChild(pricing);

const contactUS = document.createElement('li');
contactUS.innerText = "contactUS";
navs.appendChild(contactUS);

const avatar = document.createElement('div');
avatar.className = "avatar";
// innerHTML actual html work
avatar.innerHTML = "<img src='https://picsum.photos/id/64/300/400' alt='girl'>";
nav.appendChild(avatar);

const main = document.createElement('div');
main.className = "main";
container.appendChild(main);

const backgroundImage = document.createElement('img');
backgroundImage.src = "https://picsum.photos/id/1015/320/568";
backgroundImage.className = "background-img"
main.appendChild(backgroundImage);

const textContainer = document.createElement('div');
textContainer.className = "textContainer";
main.appendChild(textContainer);
const h1 = document.createElement('h1');
h1.innerText = "Norway is Calling";
textContainer.appendChild(h1);
const p = document.createElement('p');
p.innerText = "Book Now";
textContainer.appendChild(p);

const footer = document.createElement('footer');
const pFooter = document.createElement('p');
pFooter.innerText = 'Privacy Policy';
container.appendChild(footer);
textContainer.appendChild(pFooter);

// button to change country name;
// const button = document.createElement('button');
// button.innerHTML = "Change Country";
// app.appendChild(button);

let counter = 0;
backgroundImage.addEventListener('click', () => {
  // alert('button clicked');
  h1.innerText = countries[counter];
  // how do we tell it which index it is on, what is the next one
  // counter to counts every time it clicks
  console.log(counter);
  counter++;
});

locations.addEventListener('click', () => {
  alert('heggy');
  // main.innerText = '';
  const ul = document.createElement('ul');
  ul.className = "countries";
  main.innerText = "";
  main.appendChild(ul);

  // for (let i = 0; i < countries.length; i++) {
  //   const li = document.createElement('li');
  //   li.innerText = countries[i];
  //   ul.appendChild(li);
  // }
  countries.map((country) => {
    const li = document.createElement('li');
    li.innerText = country;
    ul.appendChild(li);
  });
});

const prices = [1, 2, 3, 4, 5, 6];
pricing.addEventListener('click', () => {
  // alert('pricing');
  const ul = document.createElement('ul');
  ul.className = 'prices';
  main.innerText = '';
  main.appendChild(ul);

  // for(let i = 0; i < prices.length; i++) {
  //   const li = document.createElement('li');
  //   li.innerText = prices[i];
  //   ul.appendChild(li);
  // }
  prices.map( (price) => {
    const li = document.createElement('li');
    li.innerText = price;
    ul.appendChild(li);
  });
});

const contacts = ["email", "phone", "fax"];
contactUS.addEventListener('click', () => {
  // alert('contact us');
  const ul = document.createElement('ul');
  ul.className = 'contacts';
  main.innerText = '';
  main.appendChild(ul);

  contacts.map( (contact) => {
    const li = document.createElement('li');
    li.innerText = contact;
    ul.appendChild(li);
  });
});


// <div class="container">
// <nav>
//   <ul class="navs">
//     <li>Location</li>
//     <li>Pricing</li>
//     <li>Contact Us</li>
//   </ul>
// <div class="avatar">
//   <img src="https://picsum.photos/id/64/300/400" alt="girl">
// </div>
// </nav>
// <div class='main'>
//  <img src="https://picsum.photos/id/1015/320/568" alt="cloud sky">
//  <div class="text-container">
//    <h1>Norway is Calling</h1>
//    <p>Book Now</p>
//  </div>
// </div>
// <footer>
//   <p>Privacy Policy</p>
// </footer>
// </div>
// <button>