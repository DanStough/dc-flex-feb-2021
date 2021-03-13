
let danAddress = {
    street: "123 Main Street",
    zip: 90210,
    forwardingAddress: {
        street: "453 Park Avenue",
        zip: 10000
    },
    deliveryLocations: ["Front Door", "Back Door", "Mailbox"]
};

// // Print out zip code
// console.log(danAddress.forwardingAddress.zip);

// function isValidAddress(address){
//     return
// }

// let valid = isValidAddress(danAddress)
// console.log(valid)

// Problem 17
// Create a function subtract() 
// that takes 2 number arguments and 
// returns their difference (i.e., the second number substracted from the first number).
function subtract(num1, num2) {
    var result = num1 - num2;
    return result
    // return (num1 - num2)
}

 console.log( subtract(2, 1) )
 console.log( subtract(-1, 1) )

