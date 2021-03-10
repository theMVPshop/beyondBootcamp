const express = require("express");
const router = express.Router();

//
//
// File Import

const blogsController = require("../controllers/blogs");

//
//
// Router Paths

router.get("/blogs", blogsController.list);
router.post("/blogs", blogsController.create);

//
//
// Export to index.js

module.exports = router;
