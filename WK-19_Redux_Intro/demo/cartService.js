// this function takes in an array of items as a cart
// it also takes in an item that will be deleted 
// (all items will be deleted if there are multiple)
// it returns an updated array
const deleteItemFromCart = (cart, item) => {   
    return cart.filter( cartItem => cartItem.id !== item.id )
};

module.exports = {
    deleteItemFromCart
}
