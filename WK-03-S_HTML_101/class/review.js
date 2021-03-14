// Map
let flavors = ["Chocolatte Frosted", "French Kurler", "Boston Creme", "plain glazed", "Ghost Pepper Donut"];

let sprinkleFlavors = flavors.map( (flavor) => {
    console.log(`We have ${flavor} donuts in stock at Splunkin Donuts`);
    return `${flavor} Sprinkles`
});

console.log(flavors);
console.log(sprinkleFlavors);

let flavorsSupreme = flavors.concat(sprinkleFlavors);
console.log(flavorsSupreme);

// Find
let answer = flavors.find( flavor => {
    return flavor.length >= 15
})

// Returns the FIRST ONE
console.log(answer);

// Filter
answer = flavors.filter( flavor => {
    return flavor.length >= 15
})

// Returns ALL of the items that pass this function
console.log(answer);
