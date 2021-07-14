const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const card1Button = document.getElementById("card1Button");
card1Button.addEventListener("click", () => {
    dispatch({ 
        type: "RANDOMIZE_CARD",
        payload: 0
     });
});

const card2Button = document.getElementById("card2Button");
card2Button.addEventListener("click", () => {
    dispatch({ 
        type: "RANDOMIZE_CARD",
        payload: 1
     });
});
