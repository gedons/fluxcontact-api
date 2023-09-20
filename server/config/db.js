const mysql = require('mysql');

const dbConfig = {
  host: 'dpg-ck5j3bei9prc73ck1rc0-a',
  user: 'flux_contact_user',
  password: '3DExqzi0EWWuqHbM646g5YbhkSO1ONDh',
  database: 'flux_contact',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;
