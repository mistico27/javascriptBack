const express = require("express");
const {loginSignUp,get ,list,DeleteUser, UpdateUser} = require("../usecases/usecase");
const { findById } = require("../models/users.model");
const {auth}= require("../middlewares/auth.middlewares");
const {authWhenDelete,authWhenUpdate}=require("../middlewares/newAuth.middlewares");

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
        res.status(500);
        res.json({
          success: false,
          message: "invalid Data"
        })
    }
    });



   router.get("/",async(req,res)=>{
    try{ 
    const users =await list(req.params)
      res.json({
        success:true,
        data:users
      })
    }catch(e){
      res.status(500);
      res.json({
        success: false,
        message: "invalid Data"
      });
    } 
    })
    
    router.get("/:id",auth,async(req,res)=>{
      try{ 
      const users =await get(req.params.id);
        res.json({
          success:true,
          data:users
        })
      }catch(e){
        res.status(500);
        res.json({
          success: false,
          message: e.message
        });
      } 
      })

router.put("/:id",authWhenUpdate,async(req,res)=>{
  try{
    const  UserModificado = await UpdateUser(req,res);  
        await UserModificado.updateOne({$set:req.body});
        console.log("hey soy el user modificado", UserModificado);
        res.status(200).json("the User has been updated")
    }catch(err){
        res.status(500).json(err.message);
    }
  });



///Delete an USer
router.delete("/:id",authWhenDelete,async(req,res)=>{
  try{
      const middlewareUserDelete = await DeleteUser(req.params.id)
      res.status(200)
      res.json({
        success:true,
        data:middlewareUserDelete
      })
  }catch(err){

    res.status(500)
      res.json({
        success: false,
        message: err.message
      });
  }
});




module.exports = router;