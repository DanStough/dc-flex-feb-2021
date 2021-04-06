// This will run when the browser see the script tag.
console.log("I'm started");

const donuts = [];

const renderDonuts = () => {
    const donutRoot = document.getElementById('donut-root');

    const donutsHtml = donuts.map( donut => {
        
        const template = `
            <div>
                <h3>${donut.name}</h3>
                <h4>Topped with ${donut.topping}</h4>
                <p>${donut.description}</p>
            </div>
        `;
        return template
    });

    donutRoot.innerHTML = donutsHtml.join("")
    console.log("I'm inside the render function");
}

document.addEventListener("DOMContentLoaded", () =>{
    // This will run when the page finishes loading HTML
    console.log("I'm loaded");

    const donutOrderForm = document.querySelector('#donut-order-form');
    donutOrderForm.onsubmit = (event)=> {
        event.preventDefault();
        console.log("Clicked on button");

        const formdata = new FormData(event.target);
        const entries = formdata.entries();
        const data = Object.fromEntries(entries);

        console.log(data);

        donuts.push(data)
        renderDonuts();

        donutOrderForm.reset()
    };

    renderDonuts();
})

