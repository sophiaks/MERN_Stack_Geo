const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/MERN', {useUnifiedTopology: true}, {useNewUrlParser: true})
  .then(() => console.log("MongoDB CONECTADO!!!!"))
  .catch(err => console.log(err));

var userSchema = new mongoose.Schema({
    username: String, 
    password: String
}, { collection: 'usercollection' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }