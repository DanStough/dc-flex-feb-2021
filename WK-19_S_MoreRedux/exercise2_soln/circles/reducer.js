const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION: Add a random circle
    switch(type) {
        case "ADD_RANDOM_CIRCLE":
            let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
            let radius = Math.floor(Math.random() * 100);
            return state.concat({
                radius,
                color
            });
    }
}
