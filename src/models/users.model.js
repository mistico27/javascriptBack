const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      match:/^.*@.*\..*$/,
      required:true,
      unique:true,
    },
    password:{
      type: String,
      minlength: 10,
      maxlength: 100,
      required:true,
    },
  })
  
  // Exportamos modelo
module.exports = mongoose.model("users", userSchema, "users");