const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const sortLikes = document.getElementById("sortLikes");
sortLikes.addEventListener("click", () => {
    dispatch({ type: "SORT_LIKES" });
});

const sortRetweets = document.getElementById("sortRetweets");
sortRetweets.addEventListener("click", () => {
    dispatch({ type: "SORT_RETWEETS" });
});

const sortReplies = document.getElementById("sortReplies");
sortReplies.addEventListener("click", () => {
    dispatch({ type: "SORT_REPLIES" });
});
