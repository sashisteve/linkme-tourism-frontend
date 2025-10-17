const db = require("../db");

// Create User
async function createUser(name, email, password) {
  const [result] = await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return result.insertId;
}

// Find user by email
async function findByEmail(email) {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0];
}

module.exports = { createUser, findByEmail };
