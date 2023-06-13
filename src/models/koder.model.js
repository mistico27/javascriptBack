const mongoose = require("mongoose");

/**
 * 1 - Schema de mongoose
 * 2 - Modelo -> lo que vamos a exportar
 */

const koderSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },
  module: {
    type: String
  },
  generation: {
    type: String
  },
  age: {
    type: Number,
    min: 18,
    max: 100
  },
  sex: {
    type: String,
    enum: ["f", "m", "o"]
  },
})

// Exportamos modelo
module.exports = mongoose.model("koders", koderSchema, "koders");