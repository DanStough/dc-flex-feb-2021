const pgp = require('pg-promise')(); // created pgp instance ready to make db connection

// configuration obj https://github.com/vitaly-t/pg-promise/wiki/connection-syntax
const cn = {
  host: 'localhost', // where heroku will host
  port: 5432,
  database: 'todo_app' // name of database
};
// Create db using pgp func, pass conf obj as param
const db = pgp(cn);

// async function
let getData = async () => {
  const todoTasks = await db.any("SELECT * FROM tasks");
  console.log('list of all todoTasks: ====>', todoTasks);
};

getData();

// list of all todoTasks: ====> [
//   { id: 1, title: 'Buy milk', is_completed: false },
//   { id: 2, title: 'Sweep the house', is_completed: false },
//   { id: 3, title: 'Walk the dog', is_completed: false }
// ]