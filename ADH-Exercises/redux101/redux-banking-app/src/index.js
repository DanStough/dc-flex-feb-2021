import { createStore } from "redux";

console.log("Starting banking app");

const defaultState = {
  balance: 0,
};

const actionIncrement = {
  type: "increment",
};

const actionDecrement = {
  type: "decrement",
};
// ****This is one way to write a function that creates and action, but it is not too legible****
// function account(state = defaultState, action) {
//   if (action.type === "increment") {
//     return {
//       balance: state.balance + 1,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       balance: state.balance - 1,
//     };
//   }
//   return state;
// }

// The code below contains switch/case syntax which is the norm in Redux
function account(state = defaultState, action) {
  switch (action.type) {
    case "increment":
      return {
        balance: state.balance + 1,
      };
    case "decrement":
      return {
        balance: state.balance - 1,
      };
  }

  return state;
}

const store = createStore(account);
store.subscribe(() => {
  console.log("=== state has updated ===");
  const state = store.getState();
  console.log(state);
});

Window.store = store;
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;

store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionIncrement);
store.dispatch(actionDecrement);
