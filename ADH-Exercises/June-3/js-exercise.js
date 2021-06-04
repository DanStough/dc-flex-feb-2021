//Javascript challenges 1.a
function chachaslide(reverse) {
  return reverse.split("").reverse().join("");
}

console.log(chachaslide("house"));

//Javascript challenges 1.b

let listArr = [
  "Drums",
  23,
  8,
  "Playing cards",
  "Road trip",
  932,
  "Toothpaste",
  "Landscapes",
  "Epic fails",
  3,
  "Ines is a nice girl",
  12,
  1002,
];

listArr = listArr.filter((item) => typeof item !== "number");

console.log(listArr);

function isEven(num) {
  if (num % 2 === 0) {
    return "This number is even";
  } else {
    return "This number is odd";
  }
}

console.log(isEven(2));
