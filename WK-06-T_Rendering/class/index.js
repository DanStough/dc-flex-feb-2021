// This will run when the browser see the script tag.
console.log("I'm started");

const donuts = [
    {
        name: "The Carol Baskin",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu enim, ullamcorper sed nulla in, feugiat malesuada nisi. Proin fermentum vehicula nulla varius dapibus. Morbi non nisl sed dui volutpat ullamcorper eget vitae dui. Curabitur blandit metus sit amet scelerisque consequat. Ut ornare porttitor velit, sed facilisis augue. In cursus nisi risus, quis congue sapien tempor vel. Nam sed bibendum velit. Nunc condimentum sagittis magna eget ultricies. Nunc euismod vehicula sem quis bibendum. Aenean viverra turpis at risus egestas, a porta quam tristique. Donec tempor neque vehicula nibh porta ultricies. Donec pulvinar imperdiet quam, vitae condimentum orci aliquet eu. Phasellus turpis nibh, volutpat non libero at, ultrices convallis libero. Nulla facilisi. Aliquam accumsan felis pretium diam eleifend, in volutpat lorem pellentesque.",
        topping: "Vanilla Icing w/ Tiger Stripes",
        filling: "Strawberry Jelly",
        filled: true,
        variety: "Yeast"
    },
    {
        name: "The (Tiger) King",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu enim, ullamcorper sed nulla in, feugiat malesuada nisi. Proin fermentum vehicula nulla varius dapibus. Morbi non nisl sed dui volutpat ullamcorper eget vitae dui. Curabitur blandit metus sit amet scelerisque consequat. Ut ornare porttitor velit, sed facilisis augue. In cursus nisi risus, quis congue sapien tempor vel. Nam sed bibendum velit. Nunc condimentum sagittis magna eget ultricies. Nunc euismod vehicula sem quis bibendum. Aenean viverra turpis at risus egestas, a porta quam tristique. Donec tempor neque vehicula nibh porta ultricies. Donec pulvinar imperdiet quam, vitae condimentum orci aliquet eu. Phasellus turpis nibh, volutpat non libero at, ultrices convallis libero. Nulla facilisi. Aliquam accumsan felis pretium diam eleifend, in volutpat lorem pellentesque.",
        topping: "Chocolate",
        filling: "Strawberry Jelly",
        filled: true,
        variety: "Yeast"
    },
    {
        name: "Please Save the Tigers",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu enim, ullamcorper sed nulla in, feugiat malesuada nisi. Proin fermentum vehicula nulla varius dapibus. Morbi non nisl sed dui volutpat ullamcorper eget vitae dui. Curabitur blandit metus sit amet scelerisque consequat. Ut ornare porttitor velit, sed facilisis augue. In cursus nisi risus, quis congue sapien tempor vel. Nam sed bibendum velit. Nunc condimentum sagittis magna eget ultricies. Nunc euismod vehicula sem quis bibendum. Aenean viverra turpis at risus egestas, a porta quam tristique. Donec tempor neque vehicula nibh porta ultricies. Donec pulvinar imperdiet quam, vitae condimentum orci aliquet eu. Phasellus turpis nibh, volutpat non libero at, ultrices convallis libero. Nulla facilisi. Aliquam accumsan felis pretium diam eleifend, in volutpat lorem pellentesque.",
        topping: "Chocolate",
        filling: "Chocolate",
        filled: true,
        variety: "Cake"
    }
];

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

    renderDonuts();
})