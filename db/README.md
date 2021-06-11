# Database using PSQL PostgresSQL
https://www.notion.so/samuraijane/25-db48dcc21eb842f083727fb7db848c3a

https://www.notion.so/samuraijane/Database-Cheatsheet-fba6ce52074c4a71991deef2df989128

https://www.postgresql.org/docs/13/datatype.html

1. enter into psql command 
> psql

> \i todo-app-db-setup.sql -- read execute file given

// terminal 
> npm init -y

## How to run to get the list of todo
> node main.js

## common command pgp
How to Use
Here are some of the most common functions to use.

Function	Description
- db.any()	Executes a query that can return any number of rows
- db.one()	Executes a query that expects exactly 1 row to be returned
- db.none()	Executes a query that expects no data to be returned

Use the latest JS async/await
```js
let getData = async () => {
  const todoTasks = await db.any("SELECT * FROM tasks");
  console.log('list of all todoTasks: ====>', todoTasks);
};

// list of all todoTasks: ====> [
//   { id: 1, title: 'Buy milk', is_completed: false },
//   { id: 2, title: 'Sweep the house', is_completed: false },
//   { id: 3, title: 'Walk the dog', is_completed: false }
// ]
```
## Setup Database
Before getting started with the exercises, you have to set up a database so you can work with the pg-promise library.

Save the following SQL statements to a todo-app-db-setup.sql file:

CREATE DATABASE todo_app;
\c todo_app;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  is_completed BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (title) VALUES ('Buy milk');
INSERT INTO tasks (title) VALUES ('Sweep the house');
INSERT INTO tasks (title) VALUES ('Walk the dog');
Run the pgsql command in the same directly as where you saved the todo-app-db-setup.sql file and run the following command in the PostgreSQL command-line:

username=# \i todo-app-db-setup.sql
You will see the following output in the terminal:

CREATE DATABASE
You are now connected to database "todo_app" as user "username".
CREATE TABLE
INSERT 0 1
INSERT 0 1
INSERT 0 1
You're done setting up your database. You can quit the pgsql process (\q) and can continue to the exercises using the task_app database and tasks table.

#

--
Simple Query
Initialize a new npm package (npm init)
Install the pg-promise package (npm install pg-promise)
Create a JavaScript file to build your app (main.js)
Create a database connection with the todo_app database
Create a simple SELECT query and log all of the tasks
Run the file with node and view the output from the database in the logs
When you run the main file (node index.js), you will get the following results in the console:

[
  { id: 1, title: "Buy milk", is_completed: false },
  { id: 2, title: "Sweep the house", is_completed: false },
  { id: 3, title: "Walk the dog", is_completed: false },
];