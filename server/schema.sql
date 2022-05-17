CREATE TABLE users (
  id INT AUTO_INCREMENT,
  user_id varchar(255),
  user_name varchar(255),
  user_age INT,
  password varchar(255),
  todo_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE todolist (
  id INT AUTO_INCREMENT,
  todo varchar(255),
  todoinfo_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE todoinfo (
  id INT AUTO_INCREMENT,
  summary varchar(255),
  time varchar(255),
  detail varchar(255),
  supply varchar(255),
  location varchar(255),
  friend varchar(255),
  PRIMARY KEY (id)
);

ALTER TABLE users ADD FOREIGN KEY (todo_id) REFERENCES todolist (id);
ALTER TABLE todolist ADD FOREIGN KEY (todoinfo_id) REFERENCES todoinfo (id);