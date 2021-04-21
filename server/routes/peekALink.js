const express = require("express");
const router = express.Router();
const peekalinkController = require("../controllers/peekALink");

router.post("/peekalink", peekalinkController.createPost);

module.exports = router;
