const validateRegisterInput = require("./validation/valid_cadastro");
const validateLoginInput = require("./validation/valid_login");
const { Component } = require("react");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const passport = require("passport");
const users = require("./routes/users");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

alertSuccess = () => {
  alert("Cadastro feito com sucesso!")
}


app.get("/", (req, res) => {
  res.send("TAMO NO BACKEND");
})

app.post("/api/cadastro", (req, res) => {
  //const { erros, valido } = validateRegisterInput(req.body);
  console.log(req.body)
  console.log("Tamo no server.js")
  res.json({
    message: "Dados recebidos"
  })
  const status = res.statusCode;
})

app.post("/api/login", (req, res) => {
  console.log( req.body )
  res.json({
    message: "Login feito com sucesso!"
  })
})

app.get("/api/usuarios", (req, res) => {
  
})


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

const port = process.env.PORT || 5000; 
// process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`SERVIDOR OK RODANDO NO ${port}!!`));