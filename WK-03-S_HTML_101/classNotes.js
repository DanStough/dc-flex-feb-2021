//.Map
//can replace a for loop on an array and can be used to 
//define other functions and use with anonymous functions
let flavors = ["choclate frosted", "french kruler", 'boston creme', 'plain glazed', 'Ghost pepper glaze'];

let SprinkleFlavors = flavors.map((flavor) =>{
    console.log(`We have ${flavor} donuts in stock at Splunkin Donuts`);
    return `${flavor} Sprinkles`
} );

console.log(flavors);
console.log(SprinkleFlavors);

flavorsMega = flavors.concat(SprinkleFlavors);
console.log(flavorsMega);


//.Find
//can search an array and return result needed
let ans = flavors.find(flavor =>{
    return flavor.length >= 12;
})

console.log(ans);

//.Filter
let ans2 = flavors.filter(flavor =>{
    return flavor.length >= 15;
})

console.log(ans2);
