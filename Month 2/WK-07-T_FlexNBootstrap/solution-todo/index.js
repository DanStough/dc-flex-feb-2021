let todos = []
let todoId = 0

const colors = ['bg-primary', 'bg-success', 'bg-info', 'bg-danger', 'bg-warning']

// Bonus points if you can tell me why I did this in the class slack
const getColor = (name) => {
    return colors[name.charCodeAt(0) % colors.length] 
}

// New Render function uses bootstrap cards
const renderTodo = (todo) => {

    let item = `
    <div class="card dans-flex-item text-start" style="width: 18rem;" onclick="removeItem(${todo.id})">
        <div class="card-body">
        <h5 class="card-title">${todo.task}</h5>
        <span class="badge rounded-pill ${getColor(todo.category)}">${todo.category.toUpperCase()}</span>
        </div>
    </div>`

    return item
}

// NEW NEW NEW!
const removeItem = (id) => {
    todos = todos.filter( item => item.id !== id);

    renderPage();     // I HAVE TO TELL THE PAGE TO RE-RENDER
}

// Everything below this line is unchanged

const renderPage = ()=>{
    const root = document.getElementById("root");
    root.innerHTML = todos.map( todo => renderTodo(todo)).join('\n');
}

document.addEventListener("DOMContentLoaded", () => {

    // Handle Form Events
	let taskForm = document.getElementById('task-form');

    // This code handles the submit event
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
