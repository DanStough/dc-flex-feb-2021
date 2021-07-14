const render = (state) => {
    const rectangleDOM = document.getElementById('rectangleContainer');

    rectangleDOM.innerHTML = `
        <div style="width: ${state.width}px; height: ${state.height}px; background-color: ${state.color};"></div>
    `
}