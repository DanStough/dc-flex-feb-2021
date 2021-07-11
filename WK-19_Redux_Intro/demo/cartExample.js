// We're building a shopping cart program
const redux = require("redux");
const cartService = require("./cartService");

// What do I want my store (aka STATE) to look like?
// store = {
//     value: 7
// }

// ACTION TYPES
const ADD_ITEM_TO_CART = "cart/add"
const REMOVE_ITEM_FROM_CART = "cart/remove"
const CHECKOUT = "checkout"

const CHANGE_SHIPPING_ZIPCODE = "shipping/zipcode"

let defaultState = {
    cartItems: [],
    shippingZipcode: null
}

// The reducer is going to change the store based on the action types
function shoppingReducer(state = defaultState, action){
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: state.cartItems.concat(action.payload)
            }
        case CHANGE_SHIPPING_ZIPCODE:
            return {
                ...state,
                shippingZipcode: action.payload
            }
        // TODO
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: cartService.deleteItemFromCart(state.cartItems, action.payload)
            }
        // TODO
        case CHECKOUT:
            return state
        default:
            return state
    }
}

let store = redux.createStore(shoppingReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({ 
    type: ADD_ITEM_TO_CART,
    payload: {
        id: 1,
        name: "hair dryer",
        price: 20.00
    }
 })
 store.dispatch({ 
    type: CHANGE_SHIPPING_ZIPCODE,
    payload: "15235"
 })
 store.dispatch({ 
    type: ADD_ITEM_TO_CART,
    payload: {
        id: 2,
        name: "pencils",
        price: 4.00
    }
 })
 store.dispatch({ 
    type: ADD_ITEM_TO_CART,
    payload: {
        id: 1,
        name: "hair dryer",
        price: 20.00
    }
 })
 store.dispatch({ 
    type: REMOVE_ITEM_FROM_CART,
    payload: {
        id: 1,
        name: "hair dryer",
        price: 20.00
    }
 })

