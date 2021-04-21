const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

// Select all except initial 26 BLOGS up to 10,000
const getAllBlogs = (req, res) => {
  pool.query(
    "SELECT * FROM blogs ORDER BY id DESC LIMIT 10000 OFFSET 26",
    (err, rows) => {
      if (err) return handleSQLError(res, err);
      return res.json(rows);
    }
  );
};

// Select first initial 26 BLOGS
const getInitialBlogs = (req, res) => {
  pool.query("SELECT * FROM blogs ORDER BY id DESC LIMIT 26", (err, rows) => {
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
  let keyword = blog.tags;

  let sql =
    "INSERT INTO blogs (date, title, description, url, image, category, keyword) VALUES (?, ?, ?, ?, ?, ?, ?)";

  sql = mysql.format(sql, [
    `${date}`,
    `${title}`,
    `${description}`,
    `${url}`,
    `${image}`,
    `${category}`,
    `${keyword}`,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(200).json({ newId: results.insertId });
  });
};

module.exports = { getAllBlogs, createBlog, getInitialBlogs };
