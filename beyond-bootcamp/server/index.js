const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const usersRoutes = require("./routes/users");
const businessesRoutes = require("./routes/businesses");
const businessAddressesRoutes = require("./routes/businessAddresses");

//
//u
//App.use

// express.static line 15 tells host what to run regarding the react app
// app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(usersRoutes);
app.use(businessesRoutes);
app.use(businessAddressesRoutes);

//
//
//Server Port 4001

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
