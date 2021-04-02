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
    .then((response) => {
      if (response.status === 200) {
        return res.status(200).json(response.data);
      } else {
        res.status(500).json({ error: "error retrieving data" });
      }
    });
};

module.exports = { createPost };
