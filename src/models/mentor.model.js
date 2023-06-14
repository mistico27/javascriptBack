const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
      required: true
    },
    age: {
      type: Number,
      min: 18,
      max: 100,
    },
    module:{
      type: String,
      required: true,
    },
    generations: [{
        type:{
        name:String,  
        isActive: {
          type: Boolean,
      }
    } 
    }]
  })
  
  // Exportamos modelo
module.exports = mongoose.model("mentores", mentorSchema, "mentores");