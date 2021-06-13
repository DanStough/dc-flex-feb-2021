const express = require('express');
const pgp = require('pg-promise')(); // created pgp instance ready to make db connection
const es6Renderer = require('express-es6-template-engine');
const cors = require('cors');
const app = express();

// add express middleware for body parsing
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded 
app.use(cors());

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// configuration obj https://github.com/vitaly-t/pg-promise/wiki/connection-syntax
const cn = {
  host: 'localhost', 
  port: 5432,
  database: 'todo_app'
}
const db = pgp(cn);

// CREATE a task
app.post('/tasks', async (req, res) => {
  const newTaskTitle = req.body.title;
  // const newTaskTitle = "call friend";
  console.log('req.body.title: ===>', newTaskTitle);

  try {
    await db.none("INSERT INTO tasks (title) VALUES ($1)", [newTaskTitle])

    res.status(200).send(`Task "${newTaskTitle} was created!"`);
  }
  catch (err) {
    console.log('error message ===>', err);
    res.status(500).send("server error creating task");
  }
});

// READ all tasks at endpoint /tasks
app.get('/tasks', async (req, res) => {
  let tasksArray = [];
  try {
    tasksArray = await db.any(`SELECT * FROM tasks;`);
    console.log("list of all tasks tasksArray: ===>", tasksArray);
  }
  catch (err) {
    res.status(500).send("server error: could not query db");
  }

  res.render('index', {
    locals: {
      // tasksArray: tasksArray
      tasksArray
    }
  });
});

// UPDATE if a task is completed
app.patch("/tasks/:id/is_completed", async (req, res) => {
  const taskId = req.params.id;
  const taskIsCompleted = req.body.is_completed;
  console.log('req.params.id', req.params.id);
  console.log('req.body.is_completed', req.body.is_completed);
  await db.none(`UPDATE tasks SET is_completed = $1 WHERE id = $2`, [
    taskIsCompleted,
    taskId
  ]);
  const result = taskIsCompleted ? "completed" : "not completed";
  res.send(`Task ${taskId} is ${result}`);
});

// UPDATE a task's title
app.patch('/tasks/:id/title', async (req, res) => {
  const taskId = req.params.id;
  const taskTitle = req.body.title;

  await db.none("UPDATE tasks SET title = $1 WHERE id = $2", [
    taskTitle,
    taskId
  ]);
  res.send(`Task ${taskId} is updated to "${taskTitle}"`);
});

// DELETE a task
app.delete("/tasks/:id", async (req, res) => {
  const taskId = req.params.id;
  console.log('taskID that got deleted: ==>', taskId);
  await db.none(`DELETE FROM tasks WHERE id = $1`, [
    taskId
  ]);
  res.send(`Task ${taskId} was deleted.`);
});

app.get('*', (req, res) => {
  res.send('<h1>Catch all route. you should not be here.</h1>');
});
app.listen('3030', ()=> {
  console.log("server listening on http://localhost:3030");
});