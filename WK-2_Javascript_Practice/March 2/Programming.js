1. Writing a recipe
Create a new folder called recipe-exercises and add a file called script.js inside of it (using the mkdir and touch commands).
Solution
mkdir recipe-exercises
cd recipe-exercises
touch script.js
Write out a function definition called marinaraSauce(). Be sure to be mindful of your syntax!
Solution
// Define the marinaraSauce() function
function marinaraSauce() {

}
Inside this function, write a series of console.log(); statements that will print the following marinara sauce recipe:
- Heat a medium-large saucepan over medium heat.

- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes

- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.

- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes

- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.
Solution
// Define the marinaraSauce() function
function marinaraSauce() {
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}
After your function definition, write the line of code that will invoke your function
Solution
// Define the marinaraSauce() function
function marinaraSauce() {
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
Run your script with node script.js. You should see your recipe printed to the screen!
Solution
node script.js
#2. Using Parameters
In your function definition, change marinaraSauce() to take one parameter called cookName.
Solution
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
Use cookName to print "Hey, cookName! This is my marinara sauce recipe!" before the recipe.
Solution 1
You can concatenate strings and variables using the + operator:

// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
Solution 2
This version uses the Template literal syntax

// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log(`Hey, ${cookName}! This is my marinara sauce recipe!`);
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce();
Change your function invocation to take "Adam" as a cookName
Solution
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
When you run your script, you should see "Hey, Adam! This is my marinara sauce recipe!", followed by the recipe.
#3. Using Variables
A the top of your function definition, define a variable called two, and assign it the number value 2.
Solution
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    var two = 2;
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
Define another variable called "oneFourth", and assign it the string value "1/4".
Solution
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    var two = 2;
    var oneFourth = "1/4";
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add 2 tspns of oil and 5 carlic cloves, cook until golden, about 2 minutes");
    console.log();
    console.log("- Add 1/4 cup water, 2 cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in 1/4 cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
Use string concatenation (i.e. the "+" sign) to replace any instance of 2 or 1/4 that occurs in the recipe.
Solution
// Define the marinaraSauce() function
function marinaraSauce(cookName) {
    var two = 2;
    var oneFourth = "1/4";
    console.log("Hey, " + cookName + "! This is my marinara sauce recipe!");
    console.log("- Heat a medium-large saucepan over medium heat.");
    console.log();
    console.log("- Add " + two + " tspns of oil and 5 carlic cloves, cook until golden, about " + two + " minutes");
    console.log();
    console.log("- Add " + oneFourth + " cup water, " + two + " cans of crushed tomates, and salt and season with black pepper to taste.");
    console.log();
    console.log("- Cover the pot, bring to a boil, reduce the heat to medium low, and simmer until the sauce is heated, about 10 minutes");
    console.log();
    console.log("- Stir in " + oneFourth + " cup roughly chopped fresh basil, salt and pepper as needed.");
}

// Call the marinaraSauce() function
marinaraSauce("Adam");
