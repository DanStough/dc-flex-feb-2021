let philipAddress = {
    street: "100 W Texas Avenue Apt 715",
    zip: 77598
    forwardingAddress: {
        street: 245 County Road 5634",
        zip: 78009
    },
    deliveryLocations: ["Front Door", "Back Door", "Mail Box"]

};

// Print out zipcode
console.log(philipAddress.forwardingAddress.zip);

function isValidAddress(address) {
    return true;
}

let valid = isValidAddress(philipAddress)
console.log(valid)

// Add field down here

function subtract(num1, num2) {
    var result = num1 - num2;
    return result
}

console.log( subtract(2, 7) )