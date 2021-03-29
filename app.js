const mysql = require('mysql');
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // Be sure to update with your own MySQL password!
  password: '',
  database: 'employee_trackerDB',
});

// create connection if not err
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  startPrompt();
});

// begin prompt here
function startPrompt() {
  inquirer.prompt([
    {
      type: "list",
      message: "Please choose from the following options.",
      name: "options",
      choices: [
        "Add department",
        "Add new role",
        "Add new employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee roles",

      ]
    }
  ])
}
// switch statements for user choices

.then(answer) => {
  switch (answer.action) {

    case "Add department"():
      addDepartment();
      break;

    case "Add new role"():
      addNewRole();
      break;

    case "Add new employee"():
      addNewEmployee();
      break;

    case "View departments"():
      viewDepartments();
      break;

    case "View roles"():
      viewRoles();
      break;

    case "View employee"():
      viewEmployee();
      break;

    case "Update Employee Role"():
      updateEmployeeRole();
      break;

  }
}

// create functions for        
//               "Add department",

//               "Add new role",

//               "Add new employee",

//               "View departments",

//               "View roles",

//               "View employees",

//               "Update employee roles",