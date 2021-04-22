INSERT INTO departments(department_name)
VALUES 
('Management'),
('Sales'),
('Creative Department'),
('Accounting'),
('Engineer');

INSERT INTO roles(title, salary, department_id)
VALUES
('Manager', 100000, 1),
('Sales Rep', 70000, 2),
('Graphic Designer', 65000, 3),
('Accountant', 65000, 4),
('Engineer', 100000, 5);

INSERT INTO employee(first_name, last_name, role_id) 
VALUES
('Kari', 'Johnson', 1),
('Kylie', 'Rhynard', 2),
('Maria', 'Rossi', 3),
('Kendall', 'Adamson', 4),
('Lisa', 'Huskey',5 );

UPDATE `employee_trackerDB`.`employee` SET `manager_id` = '1' WHERE (`id` > '1');