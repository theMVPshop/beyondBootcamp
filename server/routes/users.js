const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router.get("/users", usersController.getAllUsers);
router.post("/signin", usersController.signIn);
router.post("/createuser", usersController.createUser);

module.exports = router;
