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


// inquirer.prompt([/* Pass your questions in here */], function( answers ) {
//     // Use user feedback for... whatever!!
// });


// call once somewhere in the beginning of the app
// THIS IS THE CONSOLE TABLE (SYNTAX FROM DOCS)
// console.table([
//   {
//     name: 'foo',
//     age: 10
//   }, {
//     name: 'bar',
//     age: 20
//   }
// ]);

// // prints
// name  age
// ----  ---
// foo   10
// bar   20