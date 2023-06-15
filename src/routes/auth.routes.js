const express = require("express");
const {loginSignUp} = require("../usecases/usecase");
const { findById } = require("../models/users.model");
const router = express.Router();

router.post("/",async(req,res)=>{
    try{
      const findUser = await loginSignUp(req.body.email, req.body.password);
      res.status(200);
      res.json({
        success: true,
        data: findUser
      })
    }catch(e){
        res.status(500).json(e)
    }
    });











module.exports = router;