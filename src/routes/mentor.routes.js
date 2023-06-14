const express = require("express");
const {createMentor,getbyId,list,deleteMentor,updateMentor} = require("../usecases/mentorcase");
const router = express.Router();

///create mentor
router.post("/",async(req,res)=>{
    try{
        const mentor = await createMentor(req.body)
        res.status(200).json("guardado con exito");
    }catch(err){
        res.status(500).json(err)
    }
})

///list mentor
router.get("/", async (req, res) => {
    try {
      const mentores = await list();
      res.json({
        success: true,
        data: mentores
      })
    }catch(err) {
      res.status(400);
      res.json({
        success: false,
        message: err.message
      })
    }
  })

///get mentor by Id
router.get("/:id", async (req, res) => {
    try {
      const mentor = await getbyId(req.params.id);
  
      if(!mentor) {
        const error = new Error("mentor not found");
        error.status = 404; // not found
        throw error; // return
      }
      res.json({
        success: true,
        data: mentor
      })
    } catch (err) {
      console.log("ERROR en el catch", err);
      res.status(err.status || 500);
      res.json({
        success: false,
        message: err.message
      })
    }
  })
  
///delete mentor

router.delete("/:id",async(req,res)=>{
    try{
        const mentor = await deleteMentor(req,res)
        res.status(200).json("mentor has been Deleted");
    }catch(err){
        return res.status(500).json(err);
    }
});


////update Mentor

router.put('/:id',async(req,res)=>{
    try{
        if(req.body.generations[0].isActive === false){
            res.status(400);
            res.json({
        success: false,
        message: "no es posible modificar con una generacion no activa"
      })
        }else{
            const  mentorModificado = await updateMentor(req,res);  
            await mentorModificado.updateOne({$set:req.body});
            res.status=200;
            res.json({
                success: true,
                message:"Mentor modificado correctamente"
              })
        }     
             
    }catch(err){
        res.status(500).json(err);
    }
  });



module.exports = router;