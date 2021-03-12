const express = require("express");
const router = express.Router();

//
//
// File Import

const blogsController = require("../controllers/blogs");

//
//
// Router Paths

router.get("/blogs", blogsController.getAllBlogs);
router.post("/blogs", blogsController.createBlog);

//
//
// Export to index.js

module.exports = router;
