const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const usersRouter = require("./routes/users");
const blogsRouter = require("./routes/blogs");
const emailsRouter = require("./routes/emails");

// express.static line 15 tells host what to run regarding the react app
// app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(usersRouter);
app.use(blogsRouter);
app.use(emailsRouter);

//Server Port 4001

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
