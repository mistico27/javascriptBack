const express = require("express");
const { list,createMentor } = require("../usecases/mentorcase");
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


module.exports = router;