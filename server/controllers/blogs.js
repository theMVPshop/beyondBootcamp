const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");
//
//
//
//// Code
const getAllBlogs = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM blogs", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createBlog = (req, res) => {
  let blog = req.body;
  let date = blog.date;
  let title = blog.title;
  let description = blog.description;
  let url = blog.url;
  let image = blog.image;
  let category = blog.category;
  let keyword = blog.keyword;
  let likes = blog.likes;

  // INSERT INTO USERS FIRST AND LAST NAME
  let sql =
    "INSERT INTO blogs (date, title, description, url, image, category, keyword, likes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  // WHAT GOES IN THE BRACKETS???
  sql = mysql.format(sql, [
    `${date}`,
    `${title}`,
    `${description}`,
    `${url}`,
    `${image}`,
    `${category}`,
    `${keyword}`,
    `${likes}`,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = { getAllBlogs, createBlog };