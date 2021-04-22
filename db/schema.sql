DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;
USE employee_trackerDB;

-- create tables for department, role and employee

CREATE TABLE departments ( 
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30),
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary INT,
    department_id INT,
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ()

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ()

INSERT INTO emp_role (id, role_title, salary, department_id)
VALUES ()

INSERT INTO department (dep_name)
VALUES ()
