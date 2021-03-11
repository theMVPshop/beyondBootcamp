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
//// Queries for user to sign in.  First, the signIn command reaches out to DB and verifies that the password entered matches the hashed password in the DB.
//// Second, we user the getUserFromSignIn command to retrieve all the information (password redacted) from the DB and allow user to sign in.

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

//
//
//// Queries to create a new user and hash the password.  This also will return the new user Id in the process.
const createUser = (req, res) => {
    const { email, password } = req.body;
    let sql =
      "INSERT INTO ?? (??, ??) VALUES (?, ?); ";

    let getID = "SELECT MAX(id) FROM users;";

    bcrypt.hash(password, saltRounds, function (err, hash) {
      sql = mysql.format(sql, [
        "users",
        "email",
        "password",
        email,
        hash,
      ]);

      pool.query(getID, (err, rows) => {
        if (err) {
          return handleSQLError(err);
        }
        const userId = rows[0]["MAX(businessOwnerId)"];
        return res.json({ userId: userId });
      });
      pool.query(sql, (err, rows) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY")
            return res.status(409).send("UserName is taken");
          return handleSQLError(res, err);
        }
      });
    });
  };

module.exports = { signIn, createUser };
