// // Write a function "tipAmount" that is given the bill amount and the level of
// // service (one of good, fair and poor) and returns the dollar amount for the tip.
// //
// // Based on:
// // good --> 20%
// // fair --> 15%
// // poor --> 10%
// //
// // Examples:
// // tipAmount(100, 'good') --> 20
// // tipAmount(40, 'fair') --> 6

// ***********************************Answer **************************************
// const tipAmount = function (bill, quality) {

// let good = .20
// let fair = .15
// let poor = .10

// if (quality === 'good'){

//     return bill * good
// }
// if (quality === 'fair'){

//     return bill * fair
// }
// if (quality === 'poor'){

//     return bill * poor
// }


// console.log (tipAmount(100, "good"))

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "totalAmount" that takes the same arguments as "tipAmount"
// // except it returns the total as the tip amount plus the bill amount.
// // Hint: this function may use "tipAmount" internally
// //
// // Examples:
// // totalAmount(100, 'good') --> 120
// // totalAmount(40, 'fair') --> 46

// ************************************Answer **************************************

// const totalAmount = function (bill, quality) {

// let good = .20
// let fair = .15
// let poor = .10
// let total = bill + tipAmount
// let tipAmount = {
// if (quality === 'good'){

//     return bill * good
// }
// if (quality === 'fair'){

//     return bill * fair
// }
// if (quality === 'poor'){

//     return bill * poor

// let total = bill + tipAmount
// }

// console.log (totalAmount())

const totalAmount = function (bill, quality) {
    const good = .20
    const fair = .15
    const poor = .10
    
    if (quality === 'good'){
        let goodbill = bill * good
        return bill + goodbill
    }
    if (quality === 'fair'){
        let fairbill = bill * fair
        return bill + fairbill
    }
    if (quality === 'poor'){
        let poorbill = bill * poor
        return bill * poorbill
    }
    
}

    console.log (totalAmount(100, 'good'))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// // splitAmount(40, 'fair', 2) --> 23

// ***********************************Answer **************************************

// Function {

//     return
// }