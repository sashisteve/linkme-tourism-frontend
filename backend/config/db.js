const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'linkmeuser',
  password: 'TourismPass123!',
  database: 'linkmetourism'
});

module.exports = pool.promise();
