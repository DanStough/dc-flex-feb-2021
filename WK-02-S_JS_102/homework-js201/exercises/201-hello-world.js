// Write a function "hello" that takes one argument (a name), and returns a
// string that says hello to the name.
// Examples:
// - hello('Mustache') should return 'Hello, Mustache!'
// - hello('banana') should return 'Hello, banana!'
// - hello('DETROIT') should return 'Hello, DETROIT!'
function hello (name1) {
  return `Hello, ${name1}!`;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "helloDefault" such that if no name is given it will return
// 'Hello, world!'
// Otherwise it behaves the same as the "hello" function.

function helloDefault(name2) {
  if(name2) {
    return `Hello, ${name2}!`;
  } else {
    return 'Hello, world!';
  }
}