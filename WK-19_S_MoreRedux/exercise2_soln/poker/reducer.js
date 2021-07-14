const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const SUITES=["H","D","C","S"];
const VALUES=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];

const randomItemInArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, payload } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    switch(type){
        case "RANDOMIZE_CARD": 
            const randomCard = {
                value: randomItemInArray(VALUES),
                suit: randomItemInArray(SUITES)
            };
            const newState = payload === 0 ? [randomCard , state[1]]: [ state[0], randomCard];
            return newState;
    }

    return state;
}
