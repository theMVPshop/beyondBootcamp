const axios = require('axios');

//
//
//
//// Code
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
const YOUTUBE_UPLOADS_ID = process.env.YOUTUBE_UPLOADS_ID

const getVideos = (req, res) => {
  // GET VIDEOS FROM YOUTUBE ACCOUNT
  axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${YOUTUBE_UPLOADS_ID}&key=${YOUTUBE_API_KEY}&part=snippet&maxResults=4`)
    .then((response)=>{
        res.send(response.data)
    })
};

module.exports = { getVideos };