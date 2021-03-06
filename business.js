var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Naoto-kun211',
    database: 'cms_db'
});

connection.connect(function (err) {
    if (err) throw err;
    addChoice();
});

function addChoice() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "How would you like to build your team",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Department",
                "View Role",
                "View Employees",
                "Update Employee Role",
                "Update Employee Manager",
                "cancel"
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "View Department":
                    viewDepartment();
                    break;
                case "View Role":
                    viewRole();
                    break;
                case "View Employees":
                    viewEmployee();
                    break;
                case "Update Employee Role":
                    updateRole();
                    break;
                case "Update Employee Manager":
                    updateManager();
                    break;
                case "Cancel":
                    connection.end();
                    break;
            }
        })
};

function addDepartment() {
    inquirer
        .prompt({
            name: "department",
            type: "input",
            message: "What is your department's name?"
        }).then(function (answer) {
            var query = "INSERT INTO department SET ?";
            connection.query(query, { name_dep: answer.department }, function (err) {
                if (err) throw err;
                console.log(answer.department);
                addChoice();
            })
        })
};

function addRole() {
    inquirer
        .prompt([{
            name: "title",
            type: "input",
            message: "What is the role title?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the role salary?"
        }, {
            name: "depid",
            type: "input",
            message: "What is the ID number for the department role?"
        }
        ]).then(function (answer) {
            var query = "INSERT INTO role SET ?";
            connection.query(query, { title: answer.title, salary: answer.salary, department_id: answer.depid }, function (err) {
                if (err) throw err;
                addChoice();
            })
        })
};

function addEmployee() {
    inquirer
        .prompt([{
            name: "empFirst",
            type: "input",
            message: "What is the employee first name?"
        },
        {
            name: "empLast",
            type: "input",
            message: "What is the employee last name?"
        }, {
            name: "roleid",
            type: "input",
            message: "What is the ID for the employee role?"
        }, {
            name: "manid",
            type: "input",
            message: "What is the ID for the management role?"
        }
        ]).then(function (answer) {
            var query = "INSERT INTO employee SET ?";
            connection.query(query, { first_name: answer.empFirst, last_name: answer.empLast, role_id: answer.roleid, manager_id: answer.manid }, function (err) {
                if (err) throw err;
                addChoice();
            })
        })
};

function viewDepartment() {
    connection.query("SELECT name_dep FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        addChoice();
    });

};

function viewRole() {
    var query = "SELECT title, salary, department_id FROM role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        addChoice();
    });
};

function viewEmployee() {
    connection.query("SELECT first_name, last_name, role_id, manager_id FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        addChoice();
    });
};

function updateRole() {
    
        inquirer.prompt(
            [
                {
                    name: "oldRole",
                    type: "input",
                    message: "What role id would you like to update?"
                },
                {
                    name: "roleid",
                    type: "input",
                    message: "What is the employee's new role id?"
                }
            ]).then(function (answer) {
                connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [ answer.roleid , answer.oldRole ], function (err) {
                    if (err) throw err;
                    addChoice();
                })
            })
    };

    function updateManager() {
        inquirer.prompt(
            [
                {
                    name: "oldManager",
                    type: "input",
                    message: "Enter the employee ID of whom you would wish to update their manager"
                },
                {
                    name: "manageid",
                    type: "input",
                    message: "What is the employee's new manager id?"
                }
            ]).then(function (answer) {
                connection.query("UPDATE employee SET manager_id = ? WHERE id = ?", [ answer.manageid , answer.oldManager ], function (err) {
                    if (err) throw err;
                    addChoice();
                })
            })
    };
