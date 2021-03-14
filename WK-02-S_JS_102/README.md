# Conditionals, Loops and Other JS Tricks

![https://media.giphy.com/media/YFkpsHWCsNUUo/giphy.gif](https://media.giphy.com/media/YFkpsHWCsNUUo/giphy.gif)

What to expect while you're learning JavaScript... 

### Agenda

1. Review & Questions about Basic 
2. Code Demo (~30mins)
    1. Delete an Item from and array
    2. Built in methods
    3. Conditional Logic
    4. For loops 
    5. While loops
3. Breakout exercises from  [JS 101 Exercises](https://learn.digitalcrafts.com/flex/lessons/solving-problems-using-code-js/js-101/exercises.html#small) (~1 1/2 Hours)
    1. Small #21-27
4. Intermission & Review (~30 mins)
5. Back to Exercises (~1 1/2 Hours)
    1. Start homework 

---

### Announcements

1. Tuesday we will have a 1 hour career session
2. April 4th is a class holiday

---

### References

[Learning Portal: Exploring JavaScript](https://learn.digitalcrafts.com/flex/lessons/solving-problems-using-code-js/js-101/)

JavaScript Practice Sites in order of easier to harder.

1. [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript) 
2. W3 Schools
    1. [Exercises](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1)
    2. [JS Quiz](https://www.w3schools.com/js/js_quiz.asp)
3. [CodeWars](https://www.codewars.com/) 
4. [CodeSignal](https://codesignal.com/developers/)
5. [LeetCode (Advanced)](https://leetcode.com/)

---

### Homework

1. [Complete the Retrospective](https://hackmd.io/OoWk-5x3Qh21pIff87AUOQ) for the first two weeks.
2. [Work on JS201 Exercises](https://github.com/DanStough/dc-flex-feb-2021/blob/ab557d14f9734b4344fc8a8e6c4f11d433f75982/WK-02-JS_102/homework-js201/README.md) (Minimum of 5)
    1. If you try using the test runner on Mac, and get an error like `No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.`, install the following using the terminal:
        1. `xcode-select --install`
3. Read [Solving Problems with Code](https://learn.digitalcrafts.com/flex/lessons/solving-problems-using-code-js/common-patterns/#learning-objectives) on the Learning Portal
4. Get a head start by starting [Callbacks and Anonymous Functions](https://learn.digitalcrafts.com/flex/lessons/solving-problems-using-code-js/callbacks/#summary) on the Learning Portal
5. Use the above sites to practice WHENEVER YOU GET FREE TIME and don't stop until the end of the class 😉

### Example Soln - 201-hello-world.js

```js
// Write a function "hello" that takes one argument (a name), and returns a
// string that says hello to the name.
// Examples:
// - hello('Mustache') should return 'Hello, Mustache!'
// - hello('banana') should return 'Hello, banana!'
// - hello('DETROIT') should return 'Hello, DETROIT!'

function hello(name) {
    return "Hello, " + name + "!";
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "helloDefault" such that if no name is given it will return
// 'Hello, world!'
// Otherwise it behaves the same as the "hello" function.
function helloDefault(name) {
    if(name){
        // There is a name
        return hello(name);
    }
    else {
        // there is no name; name is undefined
        return hello("world");
    }
}
```
