Key	Value
Name	Alan Turing
Cell	6017576
Birthday	June 23
This is how you would express this as a JavaScript object:

const friendInfo = {
    "name": "Alan Turing",
    "cell": "6017576",
    "birthday": "June 23",
}
It lets you create a mapping from keys to values. They are useful for representing information as records.

*************************************************************************************************************
objects

Object values can be any valid JavaScript type!

Example
const superhero = {
    name: "Wonder Woman",
    alias: "Diana Prince",
    bracelets: 2,
    lassos: 1
}
#How do I retrieve value?
There are two ways to retrieve data from an object

[<key name with quotes>] retrieves the value for a key using the index syntax
.<key name> retrieves the value for a key using the dot syntax
const superhero = {
    name: "Wonder Woman",
    alias: "Diana Prince",
    bracelets: 2,
    lassos: 1
}
Example
hero_name = superhero["name"]
number_of_lassos = superhero.lassos

How do I update a value or add a new value?
Use the dot syntax or bracket syntax on the LHS to update a value. This can also be used to add a key/value pair to a dictionary.

const superhero = {
    name: "Wonder Woman",
    alias: "Diana Prince",
    bracelets: 2,
    lassos: 1
}

// Updating an existing value
superhero.alias = "Princess Diana of Themyscira"

// Equivalent
//superhero["alias"] = "Princess Diana of Themyscira"

// Adding a new value
superhero.hometown = "Themyscira"
#How do I remove a key?
Use the delete keyword to remove a key/value pair from a dictionary.

const superhero = {
    name: "Wonder Woman",
    alias: "Diana Prince",
    bracelets: 2,
    lassos: 1
}

console.log(superhero.lassos);
// 1

delete superhero.lassos;
console.log(superhero.lassos);
// undefined

************************************************************************************************
Arrays

An Array:

is a collection of values
remembers the order of the items in the collection
lets you access individual values by their position (first, second, third, etc.)
#How do I create an Array?
The easiest way to create one is to assign an Array literal to a variable:

const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]
An Array literal is:

one or more values (or variables)
separated by commas ,
enclosed in square brackets []


**INDEXING AN ARRAY**

JavaScript uses an integer index to identify values within a single Array. The first index is always 0.

You use the index to refer to a specific item in the Array:

Example

const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]

const firstItem = todos[0]
console.log(firstItem);
// "pet the cat"

const secondItem = todos[1]
console.log(secondItem);
// "go to work"

** If you index something thats not in the array you get a response of undefined**
undefined means "no value"

**LENGTH OF AN ARRAY**

Array's .length property:

const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]
console.log(`I have ${todos.length} things to do.`);
// "I have 5 things to do."


**ADD TO ARRAY**

To add items to an Array, call its .push() method. (A method is a function that belongs to an object.)

const todos = ["pet the cat", "go to work", "shop for groceries", "go home", "feed the cat"]
console.log(`I have ${todos.length} things to do.`);
// "I have 5 things to do."

todos.push("go to sleep");

console.log(`I have ${todos.length} things to do.`);
// "I have 6 things to do."

console.log(todos[5]);
// "go to sleep"
The .push() method accepts an argument (a String, in this example) and places it at the end of the Array.
