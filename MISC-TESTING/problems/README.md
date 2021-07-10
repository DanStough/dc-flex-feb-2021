# Exercise 1 - Test Driven Development Practice

For each of the following word problems, your mission is to code a JavaScript function that performs the desired action using the Test Drive Development (TDD) workflow we reviewed in class. Write a test first, then try to write the function.

`Red -> Green -> Refactor -> Repeat!`

You can have one NPM project for all of these problems, but for each, make a separate JS module file and test suite file.

## Problem 1 - Leap Year Checker

Write a funciton that returns a boolean indicating if a given year is a Leap year. Assume the year is provided as an integer.

[Leap Year Rules](https://www.timeanddate.com/date/leapyear.html)

Example inputs:
* `2001` -> Not a leap year
* `2004` -> Leap Year
* `2000` -> A Leap Year
* `2100` -> Not a Leap Year
* `2400` -> Leap Year

## Problem 2 - Days in the Month Calculator

Write a function that takes in the name of a month and the year, then returns the number of days in that month. Take leap years into consideration. Years and months are both provided in integers. Months are indexed starting at 1.

Example inputs:
* `1`, `2001` -> January 2001 had 31 days
* `2`, `2001` -> February 2001 had 28 days
* `2`, `2004` -> February 2001 had 29 days
* `11`, `2020` -> November 2020 has 30 days
* `13`, `2020` -> Not a valid month!

_Hint_: Use the function you created above! 

## Problem 3 - Bowling Score Calculator

You're building something like [BowlingGenius](https://www.bowlinggenius.com/) to calculate bowling scores online. Write a function that takes in an Array of bowling scores for each frame and computes the result. Assume all inputs are strings and the output is an integer.

A broad summary of bowling rules:
* There are ten frames
* Each frame has two chances to knock down 10 pins
* Knocking down all the pins on the first try is a strike ('X')
* Knocking down the remaining pins on the second try is a spare ('/')
* When you get a strike, the next *two* scores are counted as part of the current frame
* When you get a strike, the next *one* score is counted as part of the current frame
* If you get a strike in the tenth frame, you get two more attempts
* If you get a spare in the tenth frame, you get one more attempt

[Complete scoring rules here.](http://www.fryes4fun.com/Bowling/scoring.htm)

Example inputs:

* `['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']` 1 pin each frame and shot (score = 20)
* `['1', '/', '6', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']` One spare and one 6 (score = 22)
* `['X', '5', '3', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0']` One strike a five and a 3 (score = 26)
* `['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X']` Strike each frame (score = 300)


