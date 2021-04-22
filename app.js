 const mysql = require('mysql');
 const inquirer = require('inquirer');
const connection = require('./config/connection');

//array for prompts
let options = ['Add new department', 'Add new role', 'Add new Employee', 'View Current Departments', 'View Current Roles', 'View Current Employees', 'Update Employee role', 'Finished'];

//First user prompt 
function init() {
    //make a query for a list of employees and displaying them
    // console.table
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Please choose an option',
                choices: options,
                name: 'init',
            },
        ])
        //These create responses based on what the user has selected from the prompts.
        .then((response) => {
            switch (response.init) {
                case 'Add new department':
                    newDepartment();
                    break;
                case 'Add new role':
                    newRole();
                    break;
                case 'Add new Employee':
                    newEmployee();
                    break;
                case 'View Current Departments':
                    viewDepartment();
                    break;
                case 'View Current Roles':
                    viewRole();
                    break;
                case 'View Current Employees':
                    viewEmployees();
                    break;
                case 'Update Employee role':
                    changeRole();
                    break;
                default:
                    connection.end();
                    break;
            };
        });
};

// This creates the new department from the users input. 
let newDepartment = () => {
    inquirer
    //prompting user for answer
        .prompt([
            {
                type: 'input',
                message: 'What department would you like to add?',
                name: 'newDepartment',
            }
        ])
        //then creates the new department based off of the response
        .then((response) => {
            connection.query('INSERT INTO departments SET ?',
                {
                    department_name: response.newDepartment,
                },
                // takes user to to list of questions again
                (err, res) => {
                    if (err) throw err;
                    console.log(`\n${res.affectedRows} New department has been created.\n`);
                    init();
                }
            )
        })
};

// this creates a new role based on the users input
let newRole = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What role would you like to add?',
                name: 'newRole',
            },
            {
                type: 'input',
                message: 'What is the salary?',
                name: 'salary',
            },
            {
                type: 'input',
                message: 'Whats the department ID?',
                name: 'departmentID',
            }
        ])
        // this sends the response into the table
        .then((response) => {
            connection.query('INSERT INTO roles SET',
                {
                    role_title: response.newRole,
                    salary: response.salary,
                    department_id: response.departmentID,
                },
                (err, res) => {
                    if (err) throw err;
                    console.log(`\n${res.affectedRows} the role has been successfully added\n`);
                    init();
                }
            )
        })
};

// this is creating a new employee
let newEmployee = () => {
    console.log('\n');
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the employees first name?',
                name: 'firstName',
            },
            {
                type: 'input',
                message: 'What is the employees last name?',
                name: 'lastName',
            },
            {
                type: 'input',
                message: 'Whats the employees role ID?',
                name: 'employeeRoleId',
            },
            {
                type: 'input',
                message: 'Whats the employee Managers ID?',
                name: 'employeeManagerID',
            }
        ])
        // this takes in the users input and puts it in the db 
        .then((response) => {
connection.query('INSERT INTO employee SET',
                {
                    first_name: response.firstName,
                    last_name: response.lastName,
                    role_id: response.employeeRoleId,
                    manager_id: response.employeeManagerID,
                },
                (err, res) => {
                    if (err) throw err;
                    init();
                }
            )
        })
};

// this allows you to see the view department function & returns the associated data 
let viewDepartment = () => {
    connection.query('SELECT * FROM departments', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    })
};

// this allows you to view the function of view role & returns the associated data
let viewRole = () => {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};

// this allows you to view the function of view employees & returns the associated data
let viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        init();
    });
};

// this function allows you to change the employee role. Theres string concatenation to allow the user to choose which employee it wants to update
let changeRole = () => {
    let stringName = [];
    connection.query('SELECT first_name, last_name FROM employee', (err, res) => {
        if (err) throw err;
        //this is creating a new array for the update
        for (let i = 0; i < res.length; i++) {
            stringName.push(res[i].first_name + " " + res[i].last_name);
        };
        inquirer
        // this is allowing them to pick the new role 
            .prompt([
                {
                    type: 'list',
                    message: 'Choose an employee to assign a new role',
                    choices: stringName,
                    name: 'newRole',
                },
                {
                    type: 'input',
                    message: 'Whats the new Role ID?',
                    name: 'newRoleId',
                }
            ])
            .then((response) => {
                // this part is splitting the names and if its good it'll show the roles have been successfully updated and return to finish
                let name = response.newRole.split(' ');
                connection.query('UPDATE employee SET ? WHERE ?',
                    [{ role_id: response.newRoleId,},

                        {first_name: name[0],}, ],

                    (err, res) => {
                        if (err) throw err;
                        console.log(`\n${res.affectedRows} the role has been successfully updated\n`);
                        init();
                    })
            })
    })
};
// module.exports = init;
init()