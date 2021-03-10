const express = require("express");
const router = express.Router();

//
//
// File Import

const usersController = require("../controllers/users");

//
//
// Router Paths

router.get("/users", usersController.list);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.create);

//
//
// Export to index.js

module.exports = router;
