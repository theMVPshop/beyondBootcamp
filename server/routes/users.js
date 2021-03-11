const express = require("express");
const router = express.Router();

//
//
// File Import

const usersController = require("../controllers/users");

//
//
// Router Paths

router.get("/users/:id", usersController.signIn);
router.post("/users", usersController.createUser);

//
//
// Export to index.js

module.exports = router;
