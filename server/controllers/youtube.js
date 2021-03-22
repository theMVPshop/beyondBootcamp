// const mysql = require("mysql");
// const pool = require("../sql/connection");
// const { handleSQLError } = require("../sql/error");
//
//
//
//// Code
const getVideos = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM blogs", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = { getVideos };