const express = require("express");
const router = express.Router();

//
//
// File Import

const emailsController = require("../controllers/emails");

//
//
// Router Paths

router.post("/emails", emailsController.create);

//
//
// Export to index.js

module.exports = router;
