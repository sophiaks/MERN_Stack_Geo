// const validateRegisterInput = require("./validation/valid_cadastro");
// const validateLoginInput = require("./validation/valid_login");
// const { Component } = require("react");

const express = require("express");
const cors = require("cors");
require("../config/passport")
const app = express();
const passport = require("passport");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("TAMO NO BACKEND");
})

app.post("/api/cadastro", (req, res) => {
  //const { erros, valido } = validateRegisterInput(req.body);
  console.log(req.body)
  res.json({
    message: "Dados recebidos"
  })
})

app.post("/api/login", (req, res) => {
  console.log( req.body )
  res.json({
    message: "Login feito com sucesso!"
  })
})

var db = require('./db');
var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');

app.get('/api/users', function(req, res) {
  Users.find({}).lean().exec(
    function (e, docs) {
      res.json({ "userlist": docs });
    }
  )
}
);

const port = process.env.PORT || 5000; 
// process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`SERVIDOR OK RODANDO NO ${port}!!`));