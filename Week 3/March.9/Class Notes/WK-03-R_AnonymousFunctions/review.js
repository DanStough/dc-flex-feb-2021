// https://learn.digitalcrafts.com/flex/lessons/solving-problems-using-code-js/js-101/#an-else-branch

let todos = [];

// Push Button to add Task
function addToArray(todoArray, taskName){
    todoArray.push(taskName);
}

function printTodoCount(todoArray) {
    // Find out how many todos are in the array.
    const howMany = todoArray.length;
    // Print different messages based on that number.
    if (howMany === 0) {
      console.log('All done!');
    } else if (howMany === 1) {
      console.log('You have 1 thing left to do.');
    } else {
      console.log(`You have ${howMany} things left to do.`);
    //   console.log("You have " + howMany + " things left to do.");    // Same thing
    }
  }

// Check off item in today list
function deleteTodoItem(todoArray){
    todoArray.pop();
}

// TODO: Remove a specific item

// Pretend these are button pushes
printTodoCount(todos);

addToArray(todos, "Groceries")  // Click add
printTodoCount(todos);

addToArray(todos, "Mop the floors")  // Click add
printTodoCount(todos);

deleteTodoItem(todos)  // Click checkmark
printTodoCount(todos);
