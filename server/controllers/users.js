const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");
//
//
//
//// Code

const show = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  const email = req.params.email;
  console.log(email);
  let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["*", "users", "email", email]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const create = (req, res) => {
  let email = req.email;
  let password = newUser.password;

  // INSERT INTO USERS FIRST AND LAST NAME
  let sql = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
  // WHAT GOES IN THE BRACKETS???
  sql = mysql.format(sql, [
    "users",
    "email",
    "password",
    `${email}`,
    `${password}`,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = { show, create };
