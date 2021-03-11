const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// for bycrypt
const saltRounds = 10;

//
//
//
//// Code

const signIn = (req, res) => {
  const { email, password } = req.body;

  let sql = "SELECT ?? FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["*", "users", "email", email]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send("No matching users");

    const hash = rows[0].password;
    bcrypt.compare(password, hash).then((result) => {
      if (!result) return res.status(400).send("Invalid password");

      const data = { ...rows[0] };
      const userData = getUserFromSignIn(data.id);
      data.password = "REDACTED";

      const token = jwt.sign(data, "secret");
      res.status(200).json({
        msg: "Login successful",
        token,
        data: { ...data },
      });
    });
  });
};

const getUserFromSignIn = (id) => {
  let sql = "SELECT ?? FROM ?? WHERE ?? = ?";
  sql = mysql.format(sql, ["*", "users", "id", id]);

  pool.query(sql, (err, rows) => {
    return rows;
  });
};

// const signIn = (req, res) => {
//   const { email, password } = req.body;

//   let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;

//   sql = mysql.format(sql, ["*", "users", "email", email]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     if (!rows.length) return res.status(404).send("No matching users");
//   });
// };

const createUser = (req, res) => {
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

module.exports = { signIn, createUser };
