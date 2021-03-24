// function for tipAmount

function tipAmount() {
    var good = ".20";
    var fair = ".15";
    var poor = ".10";
    let dollarAmount = "88";
    return dollarAmount * good; // tipAmount is 17.60
}
console.log(tipAmount());

// function for totalAmount

function totalAmount(){
    var good = .20;
    var fair = .15;
    var poor = .10;
    let tipAmount = 17.60;
    let dollarAmount = 88;
    return tipAmount + dollarAmount;
}
console.log(totalAmount());

// function for split amount

function splitAmount(){
    let split = 4;
    let totalAmount = 105.60;
    return totalAmount / split;
}
console.log(splitAmount());  // the bill split between 4 people are 26.40