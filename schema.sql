DROP DATABASE IF EXISTS rq9pkuxee6lf0v5j;
CREATE DATABASE rq9pkuxee6lf0v5j;

USE rq9pkuxee6lf0v5j;

CREATE TABLE children (
id INT AUTO_INCREMENT NOT NULL,
date_added DATE,
child_Name VARCHAR(70),
guardian_Name VARCHAR(70),
email VARCHAR (70),
phone long,
primary key(id)
);

CREATE TABLE timesheet (
id INT AUTO_INCREMENT NOT NULL,
date_today DATE,
child_Name VARCHAR(70),
guardian_Name VARCHAR(70),
guardian_Name_Out VARCHAR(70),
clock_in TIME,
clock_out TIME,
PRIMARY KEY (id)
);