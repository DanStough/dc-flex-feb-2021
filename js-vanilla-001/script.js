// importing the stylesheet
// import "./style.css";

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
// Image within the container div
const mainImage = document.createElement('img');
mainImage.src = "https://picsum.photos/id/1015/320/568";
containerDiv.appendChild(mainImage);
// text-container class
const textContainer = document.createElement('div');
textContainer.className = "text-container";
containerDiv.appendChild(textContainer);
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