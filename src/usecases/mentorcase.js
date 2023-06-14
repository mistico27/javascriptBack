const Mentor = require("../models/mentor.model");


const createMentor = (data) => {
    const mentor = Mentor.create(data);
    return mentor
}
  
// Enlistar mentores;
const list = () => {
  // Accion -> use case;
  const mentores = Mentor.find();
  return mentores;
}

////seleccionar mentor
const getbyId = (id) => {
  const mentor = Mentor.findById(id) // promesa
  return mentor;
}

const deleteMentor =async(req,res)=>{
  const mentor = await Mentor.findByIdAndDelete(req.params.id);
}

const updateMentor =async(req,res)=>{
  const {id}= req.params;
  const  newMentor = await Mentor.findById(id);
  return newMentor;
}

  module.exports = { createMentor,getbyId,list,deleteMentor,updateMentor }
