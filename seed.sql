USE cms_db;

INSERT INTO department (id, name_dep)
VALUES (1, "Pool"), 
(2, "Bar"), 
(3, "Front Desk"), 
(4, "Maintenance"), 
(5, "Cleaning");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Pool Cleaner", 10000, 1), 
(2, "Water Tester", 11000, 1), 
(3, "Front Desk Manager", 25000, 3), 
(4, "Lifeguard", 13000, 1), 
(5, "Bartender", 15000, 2),
(6, "Glass Washer", 6000, 2), 
(7, "Electrician", 20000, 4), 
(8, "Janitor", 100000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "John", "Wick", 1, 4), 
(2, "Bilbo", "Baggins", 2, 1),
(3, "Tony", "Stark", 3, 2),
(4, "Kim", "Pines", 7, 3),
(5, "Gary", "Oak", 5, 3),
(6, "Knives", "Chau", 6, 2),
(7, "Joe", "Budden", 2, 5), 
(8, "Hermione", "Granger", 4, 3);