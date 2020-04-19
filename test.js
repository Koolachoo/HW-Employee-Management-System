
inquirer
    .prompt([{
        name: "nameUpdate",
        message: "What is the first name of the employee to update their role?"
    }, {
        name: "newRole",
        type: "list",
        message: "What is the new role to UPDATE to?",
        choices: [
            "Regional Manager",
            "Sales Representative",
            "Receptionist",
            "Accountant",
            "Senior Accountant",
            "Supply Relations Representative",
            "Customer Service Representative",
            "Human Resources Representative",
            "QA Director"
        ]
    }])
    .then(answers => {
        connection.query(`SELECT role.title AS Role, role.id AS RoleID, department.dept_name AS Department, department.id
FROM role
INNER JOIN department ON role.department_id = department.id
WHERE role.title = '${answers.newRole}';`, (err, res) => {
            if (err) {
                throw err;
            }
            connection.query(
                `UPDATE role, employee
  SET role.title = '${answers.newRole}'
  WHERE employee.first_name = '${answers.nameUpdate}';`,
                (err, res) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Updating role...")
                    start();
                }
            );
        });
    });





        // connection.query("SELECT title FROM role", function(err, res){
    //     if (err) throw err;
    //     return res;
    // });

    inquirer.prompt([{
        name: "oldRole",
        type: "list",
        message: "Choose a role to update",
        choices: roleNames
    },
    {
        name: "roleid",
        type: "input",
        message: "What is the employee's new role?"
    }
    ]).then(function (answer) {
        connection.query("UPDATE employee SET ? WHERE ?", [{ role_id: answer.roleid }, { id: answer.employid }], function (err, res) {

        })
    })

    var query = "SELECT title, salary, department_id FROM role";
    connection.query(query, function (err, res) {
        inquirer.prompt(
            [
                {
                    name: "oldRole",
                    type: "list",
                    message: "Choose a role to update",
                    choices: ["res"]
                },
                {
                    name: "roleid",
                    type: "input",
                    message: "What is the employee's new role?"
                }
            ]).then(function (answer) {
                connection.query("UPDATE role SET ? WHERE ?", [{ title: answer.roleid }, { title: answer.oldRole }], function (err, res) {

                })
            })
    });