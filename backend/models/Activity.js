const db = require("../db");

// Create a new activity
async function createActivity(host_id, activity_name, description = null, location = null) {
  const [result] = await db.query(
    `INSERT INTO activities (host_id, activity_name, description, location) VALUES (?, ?, ?, ?)`,
    [host_id, activity_name, description, location]
  );
  return result.insertId;
}

// Get all activities
async function getAllActivities() {
  const [rows] = await db.query("SELECT * FROM activities");
  return rows;
}

module.exports = {
  createActivity,
  getAllActivities,
};
