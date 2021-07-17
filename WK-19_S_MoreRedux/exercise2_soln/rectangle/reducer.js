const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, payload } = action;

    switch(type){
        // ACTION 1 - Increment height by 10
        case "ADD_HEIGHT":
            return {
                ...state,
                height: state.height+10
            }

        // ACTION 2 - Increment width by 10
        case "ADD_WIDTH":
            return {
                ...state,
                width: state.width+10
            }

        // ACTION 3 - Change the color
        case "CHANGE_COLOR":
            return {
                ...state,
                color: payload
            }
        default:
            return state

    }
}
