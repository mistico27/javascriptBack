const express = require("express");
const {createRegister} = require("../usecases/usecase");
const router = express.Router();


router.post("/",async(req,res)=>{

try{
  const userCosntruido = await createRegister(req.body);
  res.status(200).json(userCosntruido);
}catch(e){
    res.status(500).json(e)
}
});




module.exports = router;