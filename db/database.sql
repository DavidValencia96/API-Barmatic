CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (100) DEFAULT NULL,
    salary INT(10) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES
    (1, 'Joe', 100),
    (2, 'Juan', 120),
    (3, 'Ana', 1090),
    (4, 'Estefania', 104);

-- Tablas
CREATE TABLE roll (
    id_roll INT(11) NOT NULL,
    name VARCHAR (50) DEFAULT NULL,
    PRIMARY KEY(id_roll)
);

INSERT INTO `roll` (`name`) VALUES ('Root');
INSERT INTO `roll` (`name`) VALUES ('Admin');
INSERT INTO `roll` (`name`) VALUES ('user');
INSERT INTO `roll` (`name`) VALUES ('Teacher');



CREATE TABLE users (
    id_user INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (50) DEFAULT NULL,
    lastname VARCHAR(50) DEFAULT NULL,
    email VARCHAR(60) DEFAULT NULL,
    password VARCHAR(255) DEFAULT NULL,
    school VARCHAR(255) DEFAULT NULL,
    degree VARCHAR(255) DEFAULT NULL,
    avatar VARCHAR (255) DEFAULT NULL,
    active INT(11) DEFAULT NULL,
    user_roll INT(11) DEFAULT NULL,
    PRIMARY KEY(id_user),
    FOREIGN KEY (user_roll) REFERENCES roll (id_roll)
);

INSERT INTO `users` (`name`, `lastname`, `email`, `password`, `school`, `degree`, `avatar`, `active`, `user_roll`) 
    VALUES 
        ('pedro', 'Root', 'juan@juan.com', 'password', 'luis amigo', '11', 'avatar.png', '1', '1');
INSERT INTO `users` (`name`, `lastname`, `email`, `password`, `school`, `degree`, `avatar`, `active`, `user_roll`) 
    VALUES 
        ('andres', 'Admin', 'David@David.com', 'password', 'luis amigo', '11', 'avatar.png', 1, 2);
INSERT INTO `users` (`name`, `lastname`, `email`, `password`, `school`, `degree`, `avatar`, `active`, `user_roll`) 
    VALUES 
        ('kavier', 'User', 'Ana@Ana.com', 'password', 'luis amigo', '11', 'avatar.png', 1, 2);


CREATE TABLE category (
    id_category INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (50) DEFAULT NULL,
    active INT(11) DEFAULT NULL,
    PRIMARY KEY(id_category)
);

INSERT INTO `category` ( `name`, `active`) VALUES ('categoria 1', 1);
INSERT INTO `category` ( `name`, `active`) VALUES ('categoria 2', 2);
INSERT INTO `category` ( `name`, `active`) VALUES ('categoria 3', 1);

CREATE TABLE question (
    id_question INT(11) NOT NULL AUTO_INCREMENT,
    question VARCHAR (50) DEFAULT NULL,
    responseA VARCHAR(50) DEFAULT NULL,
    responseB VARCHAR(50) DEFAULT NULL,
    responseC VARCHAR(50) DEFAULT NULL,
    responseD VARCHAR(50) DEFAULT NULL,
    imageA VARCHAR(50) DEFAULT NULL,
    imageB VARCHAR(50) DEFAULT NULL,
    imageC VARCHAR(50) DEFAULT NULL,
    imageD VARCHAR(50) DEFAULT NULL,
    answer VARCHAR(60) DEFAULT NULL,
    date DATE NOT NULL,
    id_category INT(11) DEFAULT NULL,
    PRIMARY KEY(id_question),
    FOREIGN KEY (id_category) REFERENCES category (id_category)
);

INSERT INTO `question` (`question`, `responseA`, `responseB`, `responseC`, `responseD`, `imageA`, `imageB`, `imageC`, `imageD`, `answer`, `date`, `id_category`) 
    VALUES 
    ('PREGUNTA 1', 'RESPUESTA A', 'RESPUESTA B', 'RESPUESTA C', 'RESPUESTA D', 'IMAGEN A', 'IMAGEN B', 'IMAGEN C', 'IMAGEN D', 'RESPUESTA A', '2023-04-08', 1);
INSERT INTO `question` (`question`, `responseA`, `responseB`, `responseC`, `responseD`, `imageA`, `imageB`, `imageC`, `imageD`, `answer`, `date`, `id_category`) 
    VALUES 
    ('PREGUNTA 2', 'RESPUESTA A', 'RESPUESTA B', 'RESPUESTA C', 'RESPUESTA D', 'IMAGEN A', 'IMAGEN B', 'IMAGEN C', 'IMAGEN D', 'RESPUESTA B', '2023-04-08', 2);
INSERT INTO `question` (`question`, `responseA`, `responseB`, `responseC`, `responseD`, `imageA`, `imageB`, `imageC`, `imageD`, `answer`, `date`, `id_category`) 
    VALUES 
    ('PREGUNTA 3', 'RESPUESTA A', 'RESPUESTA B', 'RESPUESTA C', 'RESPUESTA D', 'IMAGEN A', 'IMAGEN B', 'IMAGEN C', 'IMAGEN D', 'RESPUESTA C', '2023-04-08', 2);
INSERT INTO `question` (`question`, `responseA`, `responseB`, `responseC`, `responseD`, `imageA`, `imageB`, `imageC`, `imageD`, `answer`, `date`, `id_category`) 
    VALUES 
    ('PREGUNTA 4', 'RESPUESTA A', 'RESPUESTA B', 'RESPUESTA C', 'RESPUESTA D', 'IMAGEN A', 'IMAGEN B', 'IMAGEN C', 'IMAGEN D', 'RESPUESTA D', '2023-04-08', 3);

CREATE TABLE score (
    id_score INT(11) NOT NULL AUTO_INCREMENT,
    points INT(11) DEFAULT NULL,
    date DATE NOT NULL,
    id_user INT(11) NOT NULL,
    id_category INT(11) DEFAULT NULL,
    PRIMARY KEY(id_score),
    FOREIGN KEY (id_user) REFERENCES users (id_user),
    FOREIGN KEY (id_category) REFERENCES category (id_category)
);

INSERT INTO `score` (`points`, `date`, `id_user`, `id_category`) VALUES ('100', '2023-04-08', 1, 1);
INSERT INTO `score` (`points`, `date`, `id_user`, `id_category`) VALUES ('100', '2023-04-08', 2, 2);
INSERT INTO `score` (`points`, `date`, `id_user`, `id_category`) VALUES ('100', '2023-04-08', 3, 3);
INSERT INTO `score` (`points`, `date`, `id_user`, `id_category`) VALUES ('100', '2023-04-08', 1, 1);
INSERT INTO `score` (`points`, `date`, `id_user`, `id_category`) VALUES ('50', '2023-04-08', 2, 2);
INSERT INTO `score` (`points`, `date`, `id_user`, `id_category`) VALUES ('10', '2023-04-08', 3, 3);

DESCRIBE employee;


