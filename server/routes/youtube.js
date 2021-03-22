const express = require("express");
const router = express.Router();

//
//
// File Import

const youtubeController = require("../controllers/youtube");

//
//
// Router Paths

router.get("/youtube", youtubeController.getVideos);

//
//
// Export to index.js

module.exports = router;