//DOM

var i;
for (i = 0; i < countries.length; i++) {
  text += countries[i] + "<br>";
}

[
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
"Zimbabwe
]
for let <div i=""></div>
console log countries


const app= document.getElementById('app');
const container = document.createElement('div');
container.className = "container";

const nav = document.createElement('nav');

const navs = document.createElement('ul');
navs.className = 'navs'
nav.appendChild(navs);

const locations = document.createElement('li')
locations.innerText = "locations";
navs.appendChild(locations)
const Pricing = document.createElement('li')
pricing.innerText = "pricing";
navs.appendChild(pricing)
const contactUs = document.createElement('li')
contactUs.innerText = "contactUs";
navs.appendChild(contactUs)

const avatar = document.createElement('div');
avatar.className = 'avatar';
avatar.innerHTML = "<imh src='https://picsum.photos/id/64/300/4";
nav.appendChild(avatar);


const main = document.createElement('main');
main.appendChild(backgroundimage);
main.appendChild(textContainer);


const backgroundImage= document.createElement('img');
backgroundImage.src = "http://picsum.photos/id/1015/320/568";

const textContainer = document.createElement ('div');
textConatiner.className = 'textContainer';
const h1 = document.createElement('h1');
h1.innerText = "Norway is calling";
textContainer.appendChild(h1);
const p = document.createElement('p');
p.innerText = "Book Now";
textContainer.appendChild(p);

const footer = document.createElement ('footer');
const pfooter = document.createElement('pfooter');
pfooter.innerText = "Privay Policy";
textContainer.appendChild(pfooter);

app.appendChild(conatiner);

container.appendChild(nav);
container.appenChild(main);
// container.appendChild(backgroundimage);
// container.appendChild(textContainer);
container.appendChild(footer);


//button to change country
const button = document.createElement('button');
button.innerText = "Change Country";
app.appendChild(button);

button.adEventlistener 'click, function() {
    h1.innerText = "Muncie, Indiana is calling";
    alert('button clicked');
})
    

    

   



