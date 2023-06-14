const Mentor = require("../models/mentor.model");


const createMentor = (data) => {
    const mentor = Mentor.create(data);
    return mentor
  }
  


  module.exports = { createMentor }
