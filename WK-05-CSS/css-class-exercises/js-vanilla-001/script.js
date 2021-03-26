// Import stylesheets
import "./style.css";

// start of Tourism Site
const appDiv = document.getElementById("app");
//div container
const containerDiv = document.createElement("div");
containerDiv.className = "container";
appDiv.appendChild(containerDiv);

const image = document.createElement("img");
image.src = "https://picsum.photos/id/1015/320/568";
containerDiv.appendChild(image);
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
//div textContainer
const textContainerDiv = document.createElement("div");
textContainerDiv.className = "text-container";
containerDiv.appendChild(textContainerDiv);

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
