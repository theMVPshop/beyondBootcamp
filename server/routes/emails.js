const express = require("express");
const router = express.Router();

const emailsController = require("../controllers/emails");

router.get("/emails", emailsController.getAllEmails);
router.post("/emails", emailsController.addToEmailList);

module.exports = router;
