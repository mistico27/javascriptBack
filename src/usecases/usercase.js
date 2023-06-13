const Koder = require("../models/koder.model");
/**
 * Crear
 * Actualizar
 * Obtener
 * Enlistar
 * Eliminar
 * 
 * method -> create
 * await Model.create(bfsdhjkb)
 * await Model.findById(bfsdhjkb)
 * * await Model.findByIdAndUpdate(bfsdhjkb)
 * 
 * src/
 *    models/
 *      koder.model.js
 *    usecases/
 *      koder.usecase.js ---> AQUIIIII
 * ../
 * 
 * Funciones
 */
// Enlistar koders;
const list = () => {
  // Accion -> use case;
  const koders = Koder.find();
   
  return koders;

} 

const createKoder =(req,res)=>{
    const newkoder =  new Koder(req.body)
    const savedkoder = newkoder.save();
    
}

const getUser =(req,res)=>{
    const koder =  Koder.findById(req.params.id);
    return koder;
}

const updateUser =async(req,res)=>{
    const {id}= req.params;
    const  newkoder = await Koder.findById(id);
    
    return newkoder;
}


const deleteUser =async(req,res)=>{
    const koder = await Koder.findByIdAndDelete(req.params.id);
}

module.exports = { list ,createKoder,getUser,updateUser,deleteUser}

// Crear koder
// Actualizar koder
// Eliminar koder