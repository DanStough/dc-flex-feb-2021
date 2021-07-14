const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, payload } = action;

    // Add a Name Tag
    switch(type) {
        case "ADD_NAME_TAG":
            return state.concat(payload);
    }

    return state;
}
