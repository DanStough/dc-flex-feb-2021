const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: "ADD_RANDOM_CIRCLE" }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const addCircleButton = document.getElementById("addCircle");
addCircleButton.addEventListener("click", () => dispatch({ type: "ADD_RANDOM_CIRCLE" }));

