const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: "ADD_NAME_TAG" }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const formItem = document.getElementById("nameForm");
formItem.addEventListener("submit", (event) => {
    event.preventDefault();

    const formdata = new FormData(event.target);
    const entries = formdata.entries();
    const data = Object.fromEntries(entries);

    dispatch({ 
        type: "ADD_NAME_TAG",
        payload: data.name
     });
});

