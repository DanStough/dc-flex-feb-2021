const render = (state) => {
    const circlesDOM = document.getElementById('circlesContainer');

    var circlesHTML = state.map(function (circle) {
        return `
            <div style="width: ${circle.radius * 2}px; height: ${circle.radius * 2}px; border-radius: ${circle.radius}px; background-color: ${circle.color};"></div>
        `
    });

    circlesDOM.innerHTML = `
        <div class="d-flex flex-column align-items-center">
            ${circlesHTML.join('')}
        </div>
    `
}