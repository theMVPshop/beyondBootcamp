const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()
const app = express();

const employeesRouter = require("./routes/employees")
const departmentsRouter = require("./routes/departments")
const titlesRouter = require("./routes/titles")
const salariesRouter = require("./routes/salaries")



// express.static line 15 tells host what to run regarding the react app
// app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use('/employees', employeesRouter)
app.use('/departments', departmentsRouter)
app.use('/titles', titlesRouter)
app.use('/salaries', salariesRouter)

//Server Port 4001

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
