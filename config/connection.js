const mysql = require('mysql');
const inquirer = require('inquirer');
// const init = require('../app');

// this is creating the data base connection
connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employee_trackerDB',
});

// if the connection doesn't work, it'll throw an error
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected ${connection.threadId}`);
    // init();
});

module.exports = connection;