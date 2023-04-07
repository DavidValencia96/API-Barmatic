CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) DEFAULT NULL,
    salary INT(10) DEFAULT NULL,
    PRIMARY KEY(id)
);

DESCRIBE employee;


INSERT INTO employee VALUES
    (1, 'Joe', 100),
    (2, 'Juan', 120),
    (3, 'Ana', 1090),
    (4, 'Estefania', 104);