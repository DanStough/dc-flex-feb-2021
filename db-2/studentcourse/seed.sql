-- student, course tables are leaves
INSERT INTO student (name, email) VALUES ('Jane', 'jane@tsugi.org');
INSERT INTO student (name, email) VALUES ('Ed', 'ed@tsugi.org');
INSERT INTO student (name, email) VALUES ('Sue', 'sue@tsugi.org');

SELECT * FROM student;

INSERT INTO course (title) VALUES ('Python');
INSERT INTO course (title) VALUES ('SQL');
INSERT INTO course (title) VALUES ('PHP');

SELECT * FROM course;

-- member table is junction, role 0:student 1:teacher
INSERT INTO member
  (student_id, course_id, role)
VALUES
  (1, 1, 1)
;

INSERT INTO member
  (student_id, course_id, role)
VALUES
  (2, 1, 0)
;

INSERT INTO member
  (student_id, course_id, role)
VALUES
  (3, 1, 0)
;

INSERT INTO member
  (student_id, course_id, role)
VALUES
  (1, 2, 0)
;

INSERT INTO member
  (student_id, course_id, role)
VALUES
  (2, 2, 1)
;

INSERT INTO member
  (student_id, course_id, role)
VALUES
  (2, 3, 1)
;

INSERT INTO member
  (student_id, course_id, role)
VALUES
  (3, 3, 0)
;

-- reconstruct from student name, role from membership teacher/student, title of course.  From student table, join to the member table to student table: according to filtering: student_id = student.id, Join course to student table: according to the rules of member.course_id points to course.id
-- https://www.coursera.org/learn/database-design-postgresql/lecture/C69wK/many-to-many-relationships
SELECT student.name, member.role, course.title
FROM student
JOIN member ON member.student_id = student.id
JOIN course ON member.course_id = course.id
ORDER BY course.title, member.role DESC, student.name;
-- ORDER BY is sort the column



