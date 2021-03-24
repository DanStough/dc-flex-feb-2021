// //

// let toDos = ["Groceries", "Trash"];

// function printToDoCount(toDoArray) {
//     const howMany = toDoArray.length;
//     if (howMany === 0); {
//         console.log(`All done!`);
//     } else if (howMany === 1) {
//         console.log(`You have 1 thing left to do.`);
//     } else {
//         console.log(`You have ${howMany} thing to do.`);
//     }

//     }

//     printToDoCount(toDos);
      

let todos = [];

// Push Button to Add Task
function addToArray(taskName) {
    todos.push(taskName);
}


// PRetend these are button pushes

addToArray(todos, "Groceries")

printToDoCount(todos)