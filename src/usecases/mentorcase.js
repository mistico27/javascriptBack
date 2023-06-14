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

const updateMentor = async (id, data) => {
  const mentor = await Mentor.findById({ _id: id })
  let newMentor = mentor

  // Combino data nueva con la que ya esta
  for(let key in data) {
    if(key !== "generation") {
      newMentor[key] = data[key]
    }
  }

  if(data?.generation) {
    // Hago todas mis generaciones falsas
    let newGenerations = newMentor.generations.map(generation => {
      return {
        name: generation.name,
        isActive: false
      }
    });

    // Agrego mi nueva generacion que me manda el cliente como activa
    //@ts-ignore
    newGenerations.push({
      name: data.generation.name,
      isActive: true
    });
    // A mi mentor le agrego sus NUEVAS GENERACIONES
    newMentor.generations = newGenerations;
  }

  // Actualizar a la base de datos
  const updatedMentor = await Mentor.findByIdAndUpdate(id, newMentor, { returnDocument: "after" })

  // Regresarlo
  return updatedMentor;
}

  module.exports = { createMentor,getbyId,list,deleteMentor,updateMentor }
