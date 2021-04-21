const express = require("express");
const router = express.Router();

const youtubeController = require("../controllers/youtube");

router.get("/youtube", youtubeController.getVideos);
router.get("/gradVideos", youtubeController.gradVideos);

module.exports = router;
