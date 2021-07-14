const initialState = {
    value: 0,
    color: "black"
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            ...state,
            value: state.value + action.payload
        }
    }
    if (type === "DECREMENT") {
        return {
            ...state,
            value: state.value - action.payload
        }
    }
    if (type === "COLOR_CHANGE") {
        return {
            ...state,
            color: action.payload
        }
    }
    if (type === "OVERRIDE") {
        return {
            ...state,
            value: action.payload
        }
    }
    return state
}
