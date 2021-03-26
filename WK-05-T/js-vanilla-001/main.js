// import stylesheets


const app = document.getElementById("app");
const image = document.createElement("img");
const container = document.createElement("div");
image.src = "https://picsum.photos/id/1015/320/568";

const textContainer = document.createElement('div');
textContainer.className = "text-container";
textContainer.innerHTML = `
<h1>Norway is Calling</h1>
<p>Book Now</p>
`;

container.className = "container";


app.appendChild(container);
container.appendChild(image);
container.appendChild(textContainer);



// <div class="container">
// <nav>
//   <ul class="navs">
//     <li>Location</li>
//     <li>Pricing</li>
//     <li>Contact Us</li>
//   </ul>
// </nav>
// <img src="https://picsum.photos/id/1015/320/568" alt="cloud sky">
// <div class="text-container">
//   <h1>Norway is Calling</h1>
//   <p>Book Now</p>
// </div>
// </div>