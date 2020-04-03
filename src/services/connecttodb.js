const mysql = require('mysql');
require('dotenv').config({ path: __dirname + '../../.env' });

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  multipleStatements: true,
});

connection.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection to database establised');
});

module.exports = connection;