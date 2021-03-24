function makeANumber () {
    var myNum = 700;
    return myNum;
}
console.log(makeANumber());

function makeAnInteger () {
    var myInt = 200;
    return myInt;
}
console.log(makeAnInteger());

function myFloat () {
    var myFloat = 3.14159;
    return myFloat;
}
console.log(myFloat());

function makeZero () {
    var zilch = 0;
    return zilch;
}
console.log(makeZero());

function makeNothing () {
    var huh;
    return huh;
}
console.log(makeNothing());

function makeBoolean () {
    var myBool = false;
    return myBool;
}
console.log(makeBoolean());

function makeTrue () {
    var yep = true;
    return yep;
}
console.log(makeTrue());

function makeFalse () {
    var nope = false;
    return false;
}
console.log(makeFalse());

function makeNull () {
    var nothingMuch = null;
    return null;
}
console.log(makeNull());

function helloWorld () {
    return 'Hello World!'
}
console.log(helloWorld());

function helloName (name) {
    var name = "Philip";
    return "Hello, " + name + "!";
}
console.log(helloName());


function abstractLength() {
    var tarPitAbstract = 'Complexity is the single major difficulty in the successful development of large-scale software systems. ' +
    'Following Brooks we distinguish accidental from essential difficulty, but disagree with his premise that most complexity remaining in contemporary systems is essential. ' +
    'We identify common causes of complexity and discuss general approaches which can be taken to eliminate them where they are accidental in nature. ' +
    'To make things more concrete we then give an outline for a potential complexity-minimizing approach based on functional programming and Codd’s relational model of data.'

    return tarPitAbstract.length;
}
console.log(abstractLength());


function makeLoud() {
    var chorus = 'Who let the dogs out?';
    return chorus.toUpperCase();
  }
  console.log(makeLoud ())

  function makeQuiet(str) {
      let str = "STR";
      return str.toLowerCase();
  }
  console.log(makeQuiet(str));

  function add99(n) {
      var n = 99;
    return 99 + n;
  }
  console.log(add99());

  function add() {
      let num1 = 2;
      let num2 = 7;
      return num1 + num2;
      ;
  }
  console.log(add());

  function subtract() {
      let num1 = 2;
      let num2 = 7;
      return num1 - num2;
  }
  console.log(subtract());

  function multiply() {
      let num1 = 2;
      let num2 = 7;
      return num1 * num2;
  }
  console.log(multiply());


  function divide() {
      let num1 = 2;
      let num2 = 7;
      return num1 % num2;
  }
  console.log(divide());

  function mod() {
      let num1 = 7;
      let num2 = 2;
      return 7 % 2;
  }
  console.log(mod());

  function threeFruits() {
      var fruits = ['apple', 'banana', 'kiwi']
      return fruits;
  }
  console.log("The three fruits are", threeFruits());

  function multipleTypes() {
    var diverseArray = ['Skateboard', null, 8.75, 'Eiffel Tower', 44, 7, true, null]
    return diverseArray;
}
  console.log(multipleTypes());

function indexAccess () {
    let people = ["Philip", "Teila", "John", "Joe", "Adam", "Eve"];
    return people [2];
}
console.log(indexAccess());

function useLength () {
    let arr = ["a", "b", "c"];
    return arr.length;
}
console.log(useLength());

function usePush() {
    let arr = ["a", "b", "c"];
    arr.push("d");
    return arr;
}
console.log(usePush());

function useIndexOf() {
    let arr = ['C', 'A', 'G', 'T', 'A', 'A', 'G', 'T'];
    arr.indexOf("T");
    return arr.indexOf('T');
}
console.log(useIndexOf());

function useJoin() {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
    return arr.join('-');

}
console.log(useJoin());


