require('dotenv').config();
const mysql = require('mysql2');

const sqldb = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306
},
console.log('connection established with employee_db!')
);

module.exports = sqldb;