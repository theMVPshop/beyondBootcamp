const express = require("express");
const router = express.Router();

//
//
// File Import

const emailsController = require("../controllers/emails");

//
//
// Router Paths

router.get("/emails", emailsController.getAllEmails);
router.post("/emails", emailsController.addToEmailList);

//
//
// Export to index.js

module.exports = router;
