const todos = []
let todoId = 0

const renderTodo = (todo) => {
    let item = `<li><strong>${todo.category.toUpperCase()}</strong>: ${todo.task}</li>`;

    if(todo.done === "on"){
        item = `<strike>${item}</strike>`;
    }

    return item
}

const renderPage = ()=>{
    const root = document.getElementById("root");
    root.innerHTML = todos.map( todo => renderTodo(todo)).join('\n');
}

document.addEventListener("DOMContentLoaded", () => {

    // Handle Form Events
	let taskForm = document.getElementById('task-form');

    taskForm.onsubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const entries = formData.entries();
        const data = Object.fromEntries(entries);

        data.id = todoId++;     // Give each todo list item a unique id

        console.log(data)

        todos.push(data)
        renderPage()

        taskForm.reset()
    } 

});
