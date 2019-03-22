DROP DATABASE IF EXISTS dayCare_db;
CREATE DATABASE dayCare_db;

USE dayCare_db;

CREATE TABLE children (
id INT AUTO_INCREMENT NOT NULL,
date_added DATE,
child_Name VARCHAR(70),
guardian_Name VARCHAR(70),
primary key(id)
);

CREATE TABLE timesheet (
id INT AUTO_INCREMENT NOT NULL,
date_today DATE,
child_Name VARCHAR(70),
guardian_Name VARCHAR(70),
clock_in TIME,
clock_out TIME,
PRIMARY KEY (id)
);