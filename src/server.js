// const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const cors = require("cors");

const usersRouter = require("../server/routes/users");
const blogsRouter = require("../server/routes/blogs");
const emailsRouter = require("../server/routes/emails");
const peekalinkRouter = require("../server/routes/peekALink");
const youtubeRouter = require("../server/routes/youtube");

const port = process.env.PORT || 4001;
// app.use(express.static("build"));
// app.use(express.static(path.join("../", "build")));
app.use(bodyParser.json());

let corsOptions = {
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(
  "/",
  cors(corsOptions),
  usersRouter,
  blogsRouter,
  emailsRouter,
  peekalinkRouter,
  youtubeRouter
);

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
