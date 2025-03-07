const mysql = require("mysql2/promise");
require("dotenv").config(); // Load environment variables

// Create MySQL connection
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Check if connected
db.getConnection((err, connection) => {
  if (err) {
    console.error(" MySQL Connection Failed:", err);
    process.exit(1);
  } else {
    console.log(" MySQL Database Connected");
    connection.release();
  }
});

module.exports = db;
