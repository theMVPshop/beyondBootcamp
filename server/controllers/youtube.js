const axios = require("axios");

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
// const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
const YOUTUBE_GRAD_PLAYLIST_ID = process.env.YOUTUBE_GRAD_PLAYLIST_ID;
const YOUTUBE_TEST_PLAYLIST_ID = process.env.YOUTUBE_TEST_PLAYLIST_ID;

const getVideos = (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=${YOUTUBE_TEST_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
    )
    .then((response) => {
      res.send(response.data);
    });
};

const gradVideos = (req, res) => {
  axios
    .get(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=25&playlistId=${YOUTUBE_GRAD_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`
    )
    .then((response) => {
      res.send(response.data);
    });
};

module.exports = { getVideos, gradVideos };

// Tutorial Videos Notes:
// Original that brings back recent videos from entire youtube channel
// `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${YOUTUBE_UPLOADS_ID}&key=${YOUTUBE_API_KEY}&part=snippet&maxResults=4`
// Gets entire channel that gives access to any playlists and their information
// `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
//Get Test Playlist info and videos

// Grad Channel Videos Notes:
// Original that brings back recent videos from entire youtube channel
// `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${YOUTUBE_UPLOADS_ID}&key=${YOUTUBE_API_KEY}&part=snippet&maxResults=4`
// Gets entire channel that gives access to any playlists and their information
// `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=50&key=${YOUTUBE_API_KEY}`
// Gets GradTV playlist info and videos
