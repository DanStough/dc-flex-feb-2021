const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT", payload: 1 }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT", payload: 1 }));

const fiveIncrementButton = document.getElementById('fiveIncrement');
fiveIncrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT", payload: 5 }));

const fiveDecrementButton = document.getElementById('fiveDecrement');
fiveDecrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT", payload: 5 }));

const colorInput = document.getElementById('colors');
colorInput.addEventListener('change', e => dispatch({ type: "COLOR_CHANGE", payload: e.target.value }));

const overrideInput = document.getElementById('override');
overrideInput.addEventListener('change', e => dispatch({ type: "OVERRIDE", payload: e.target.value }));
