const axios = require("axios");
require("dotenv").config();

const createPost = (req, res) => {
  let url = req.body.url;

  axios
    .post(
      "https://api.peekalink.io/",
      { link: url },
      { headers: { "X-API-Key": process.env.PEEKALINK_API_KEY } }
    )
    .then((res) => {
      // need to send to front end form
      console.log("PEEK_RES: ", res.data);
    });
};

module.exports = { createPost };
