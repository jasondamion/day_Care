DROP DATABASE IF EXISTS dayCare_db;
CREATE DATABASE dayCare_db;

USE dayCare_db;

CREATE TABLE clock (
id INT AUTO_INCREMENT NOT NULL,
date_today DATE,
child_Name VARCHAR(50),
child_Pic VARCHAR(250)
clock_in TINYINT(1),
clock_out TINYINT(1),
PRIMARY KEY (id)
)

SELECT * FROM clock
