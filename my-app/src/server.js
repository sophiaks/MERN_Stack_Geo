const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");

const users = require("./routes/users");
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
//const db = require("./config/keys").mongoURI;
const db = 'mongodb://localhost:27017/my-app'

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB CONECTADO!!!!"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("../config/passport")
app.use("/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`SERVIDOR OK RODANDO NO ${port}!!`));