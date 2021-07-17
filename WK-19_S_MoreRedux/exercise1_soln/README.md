# Redux: Simple Counter

## Overview

Take a look at the /src folder - You'll find a working counter app that uses Redux. Right now, the app simply renders a counter value and a "+1" button that increments the value. In this exercise, you'll be adding functionality to this application, getting practice working with applications that separate the "data layer" from the "render layer".

## Instructions

Add the features below one at a time. For each feature, you might find yourself editing the code in these ways:
- Updating reducer.js to include a new if-block for the new Action
- Updating index.html to include additional HTML elements (buttons, input tags, etc.)
- Updating index.js to include additional DOM event listeners that dispatch actions
- Updating render.js to change the way the counter value displays on the screen

### Features to Implement:
1) Add a decrement button that decreases the counter by 1 when clicked.
2) Add a +5 button and a -5 button.
3) Add a dropdown with the values "red", "green", and "blue". Make it change the color of the counter (You'll have to make your own "color" property in the state!)
4) Add a text field that lets the user set the counter value to whatever number they enter

### BONUS CHALLENGE
Try adding a "+1 counter" button that adds more counters to the screen. Each counter should have its own buttons that increment/decrement its value