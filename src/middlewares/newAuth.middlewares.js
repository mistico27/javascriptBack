const jwt = require("../lib/jwt/jwt.lib")

const authWhenDelete =(req,res,next)=>{
	//verificar el token y obtener header de authorizacion
	try{
	const auth =req.headers.authorization || "";    
    ///quitar Bearer  con split
    const newAuth =auth.split(" ")[1];
    ///verificar token
    const isVerified =jwt.verify(newAuth);
    if(isVerified.id===req.params.id){
        res.status(400);
        res.json({
          success: false,
          message: "El mismo usuario no puede removerse"
        });  
        return; 
    }
     
    next();
    }catch(e){
        res.status(400);
        res.json({
          success: false,
          message: e.message
        });
    }
}

const authWhenUpdate =(req,res,next)=>{
	//verificar el token y obtener header de authorizacion
	try{
	const auth =req.headers.authorization || "";    
    ///quitar Bearer  con split
    const newAuth =auth.split(" ")[1];
    ///verificar token
    const isVerified =jwt.verify(newAuth);
    if(isVerified.id===req.params.id){
        res.status(400);
        res.json({
          success: false,
          message: "El mismo usuario no puede hacer update"
        }); 
        return;  
    }
    next();
    }catch(e){
        res.status(400);
        res.json({
          success: false,
          message: e.message
        });
        
    }
}


module.exports ={authWhenDelete,authWhenUpdate}