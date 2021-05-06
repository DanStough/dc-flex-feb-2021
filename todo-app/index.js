// Runs when browser see the script tag
console.log("1. I'm Here")

const donuts = [
  {
    name: "The Carol Baskin",
    description: "lovely donls gaihl adkjalif. lsijfodia djlsi",
    topping: "Vanilla Icing w/ tiger stripes",
    filling: "strawberry",
    filled: true,
    variety: "Yeast"
  },
  {
    name: "The (Tiger) King",
    description: "lovely donls gaihl adkjalif. lsijfodia djlsi",
    topping: "Choco Icing w/ tiger stripes",
    filling: "strawberry",
    filled: true,
    variety: "Yeast"
  },
  {
    name: "Please Save the Tigers",
    description: "lovely donls gaihl adkjalif. lsijfodia djlsi",
    topping: "Sprinkles Icing w/ tiger stripes",
    filling: "strawberry",
    filled: true,
    variety: "Yeast"
  },
];

const renderDonuts = () => {
  // console.log("3. I'm inside the render function");
  const donutRoot = document.getElementById("donut-root");
  const donutHTML = donuts.map( donut => {
    const template = `
      <div>
        <h3>${donut.name}</h3>
        <h4>Topped with ${donut.topping}</h4>
        <p>${donut.description}</p>
      </div>
    `;
    return template
  });

  donutRoot.innerHTML = donutHTML.join("");
}

// https://javascript.info/onload-ondomcontentloaded
// wait until DOM is loaded when you getting stuff from DOM
// function ready() {
//   alert('DOM is ready');
//   alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
// }
document.addEventListener("DOMContentLoaded", () => {
  // This will run when DOM page loaded
  console.log("2. DOM loaded")

  renderDonuts();
})