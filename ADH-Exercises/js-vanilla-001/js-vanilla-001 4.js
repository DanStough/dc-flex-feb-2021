var countries = [
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
  "Zimbabwe",
];
const app = document.getElementById("app");
const container = document.createElement("div");
container.className = "container";
// nav element
const nav = document.createElement("nav");
const navs = document.createElement("ul");
navs.className = "navs";
nav.appendChild(navs);
const locations = document.createElement("li");
locations.innerText = "locations";
navs.appendChild(locations);
const pricing = document.createElement("li");
pricing.innerText = "pricing";
navs.appendChild(pricing);
const contactUs = document.createElement("li");
contactUs.innerText = "contactUs";
navs.appendChild(contactUs);
const avatar = document.createElement("div");
avatar.className = "avatar";
avatar.innerHTML = "<img src='https://picsum.photos/id/64/300/400' />";
nav.appendChild(avatar);
const main = document.createElement("main");
const backgroundImage = document.createElement("img");
backgroundImage.src = "https://picsum.photos/id/1015/320/568";
const textContainer = document.createElement("div");
textContainer.className = "text-container";
const h1 = document.createElement("h1");
h1.innerText = "Norway is calling";
textContainer.appendChild(h1);
const p = document.createElement("p");
p.innerText = "Book Now";
textContainer.appendChild(p);
main.appendChild(backgroundImage);
main.appendChild(textContainer);
const footer = document.createElement("footer");
const pFooter = document.createElement("p");
pFooter.innerText = "Privacy Policy";
footer.appendChild(pFooter);
app.appendChild(container);
container.appendChild(nav);
container.appendChild(main);
container.appendChild(footer);
let counter = 0;
backgroundImage.addEventListener("click", function () {
  h1.innerText = countries[counter];
  console.log(counter);
  counter++;
});
locations.addEventListener("click", function () {
  const ul = document.createElement("ul");
  ul.className = "countries";
  main.innerText = "";
  main.appendChild(ul);
  for (let i = 0; i < countries.length; i++) {
    const li = document.createElement("li");
    li.innerText = countries[i];
    ul.appendChild(li);
  }
});
