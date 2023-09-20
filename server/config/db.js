const mysql = require('mysql');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fluxcontact',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
