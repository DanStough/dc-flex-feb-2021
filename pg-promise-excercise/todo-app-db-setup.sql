CREATE DATABASE todo_app; -- create db named todo_app
\c todo_app; -- connect to todo_app db

-- schema for tasks table in todo_app db
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,  -- NOT NULL means required field
  is_completed BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (title) VALUES ('Buy milk');
INSERT INTO tasks (title) VALUES ('Sweep the house');
INSERT INTO tasks (title) VALUES ('Walk the dog');
