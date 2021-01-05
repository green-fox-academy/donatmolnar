CREATE DATABASE todo;

USE todo;

CREATE TABLE todos 
  (id INTEGER PRIMARY KEY AUTO_INCREMENT, 
  todo TEXT, 
  completed BOOLEAN);

INSERT INTO todos VALUE (1, "Make a list", 0);

INSERT INTO todos VALUE (2, "Check it twice", 0);

SELECT * FROM todos;

INSERT INTO todos (todo, completed) VALUE ("First completed", 1), ("Second completed", 1);

UPDATE todos
SET completed = 0
WHERE todo = "Second completed";

DELETE FROM todos
WHERE completed = 1;
