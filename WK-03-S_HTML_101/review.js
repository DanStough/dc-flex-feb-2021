let flavors = ["ch", "va", "plain"];

let sprinkleFlavors = flavors.map((flavor) => {
  // pop
  // flavors.pop();
  console.log(`We love ${flavor} donut!`);
  // add sprinkles
  return `ADD ${flavor} Sprinkles`;
});

console.log(`orig array ${flavors}`);
console.log(sprinkleFlavors);

let flavorsSupreme = flavors.concat(sprinkleFlavors);
console.log(flavorsSupreme);

// let answer = flavors.find( flavor => flavor === "ch" );
// console.log(`find answer ${answer}`);
let answer = flavors.find( flavor => flavor.length >= 5 );
console.log(`find answer length ${answer}`);




