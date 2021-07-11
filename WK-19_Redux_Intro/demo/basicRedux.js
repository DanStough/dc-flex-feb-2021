// We're building a counting program
const redux = require("redux");

// What do I want my store (aka STATE) to look like?
// store = {
//     value: 7
// }

// ACTION TYPES
const INCREMENT = "counter/incremented"
const DECREMENT = "counter/decremented"

// The reducer is going to change the store based on the action types
function counterReducer(state = { value: 0 }, action){
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1}
        case DECREMENT:
            return { value: state.value - 1}
        default:
            return state
    }
}

// Create the store and plug in the reducer
let store = redux.createStore(counterReducer)

// Listening ot ALL changes in the store; this function will run.
store.subscribe(() => {
    console.log(store.getState())
})

// Sending Actions to the store -> AKA Dispatch
store.dispatch({ type: DECREMENT })
store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })
store.dispatch({ type: INCREMENT })
