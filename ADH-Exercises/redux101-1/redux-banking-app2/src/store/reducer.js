const initialState = {
  counter: 3000,
  name: "John Doe",
  tasks: ["wash the car", "Take out the trash"],
};

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  return state;
};

export default reducer;
