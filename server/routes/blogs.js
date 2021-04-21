const express = require("express");
const router = express.Router();
const blogsController = require("../controllers/blogs");

router.get("/initialBlogs", blogsController.getInitialBlogs);
router.get("/blogs", blogsController.getAllBlogs);
router.post("/blogs", blogsController.createBlog);

module.exports = router;
