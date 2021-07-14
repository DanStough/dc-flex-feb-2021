const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const height = document.getElementById("height");
height.addEventListener("click", () => {
    dispatch({ type: "ADD_HEIGHT" });
});

const width = document.getElementById("width");
width.addEventListener("click", () => {
    dispatch({ type: "ADD_WIDTH" });
});

const red = document.getElementById("red");
red.addEventListener("click", () => {
    dispatch({ 
        type: "CHANGE_COLOR", 
        payload: "red"
    });
});

const blue = document.getElementById("blue");
blue.addEventListener("click", () => {
    dispatch({ 
        type: "CHANGE_COLOR", 
        payload: "blue"
    });
});

