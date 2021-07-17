const render = (state) => {
    const pokerDOM = document.getElementById('pokerContainer');

    var cardsHTML = state.map(function (card) {
        return `
            <img width=80 src="cards/${card.value}${card.suit}.png"/>
        `
    });

    pokerDOM.innerHTML = `
        <div class="text-center mt-5 d-flex justify-content-center align-items-start">
            ${cardsHTML.join('')}
        </div>
    `
}