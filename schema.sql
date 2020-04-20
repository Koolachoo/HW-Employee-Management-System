DROP DATABASE IF EXISTS `cms_db`;
CREATE DATABASE `cms_db`;
USE `cms_db`;

CREATE TABLE `department` (
id INT auto_increment primary key,
name_dep varchar(30)
);

CREATE TABLE `role` (
id INT auto_increment primary KEY,
title VARCHAR(30) NULL,
salary DECIMAL(10,2) NULL,
department_id INT NOT NULL
);

CREATE TABLE `employee` (
id INT auto_increment PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30) ,
role_id INT ,
manager_id INT 
);

SELECT * FROM `department`;
SELECT * FROM `role`;
SELECT * FROM `employee`;