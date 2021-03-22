const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");
//
//
//
//// Code

const getAllEmails = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM emails", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const addToEmailList = (req, res) => {
  let email = req.body.email;

  let sql = "INSERT INTO emails (email) VALUES (?)";

  sql = mysql.format(sql, [`${email}`]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = { getAllEmails, addToEmailList };
