CREATE TABLE student (
  id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  email VARCHAR(128) UNIQUE
);

CREATE TABLE course (
  id SERIAL PRIMARY KEY,
  title VARCHAR(128) UNIQUE
);

CREATE TABLE member (
  student_id INTEGER REFERENCES student(id) ON DELETE CASCADE,
  course_id INTEGER REFERENCES course(id) ON DELETE CASCADE,
  role INTEGER,
  PRIMARY KEY (student_id, course_id)
);