const express = require("express");
const { list,createKoder,getUser,
    updateUser,deleteUser } = require("../usecases/usercase");
const Koder =require("../models/koder.model")

// Router
// Un conjunto de rutas en una applicacion
const router = express.Router();
/**
 * Las rutas
 * Aqui vamos a leer el request y response
 */

// /koders
router.get("/", async (req, res) => {
  try {
    const koders = await list();
    res.json({
      success: true,
      data: koders
    })
  }catch(err) {
    res.status(400);
    res.json({
      success: false,
      message: err.message
    })
  }
})

///
router.post("/",async(req,res)=>{
    try{
        const savedkoder = createKoder(req,res);
        res.status(200).json("guardado con exito");
    }catch(err){
        res.status(500).json(err)
    }
})

///get a koder
router.get("/:id",async(req,res)=>{
    try{
        const koder = await getUser(req,res);
        console.log(koder);
        res.status(200).json(koder); 
    }catch(err){
        res.status(500).json(err);
    }
});


///update a koder
router.put('/:id',async(req,res)=>{
    try{
    const  koderModificado = await updateUser(req,res);  
        await koderModificado.updateOne({$set:req.body});
        res.status(200).json("the koder has been updated")
    }catch(err){
        res.status(500).json(err);
    }
  });

///Delete a koder
router.delete("/:id",async(req,res)=>{
        try{
            const koder = await deleteUser(req,res)
            res.status(200).json("account has been Deleted");
        }catch(err){
            return res.status(500).json(err);
        }
});

/**
 * Ejercicio: obtener un koder;
 */


module.exports = router;