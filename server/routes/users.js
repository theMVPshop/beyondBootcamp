const express = require("express");
const router = express.Router();

// File Import
const usersController = require("../controllers/users");

// Router Paths
router.get("/users", usersController.getAllUsers);
router.post("/signin", usersController.signIn);
router.post("/createuser", usersController.createUser);

// Export to index.js
module.exports = router;
