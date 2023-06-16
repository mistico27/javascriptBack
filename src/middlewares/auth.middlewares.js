///middleware  de auth que vamos a usar
const jwt = require("../lib/jwt/jwt.lib")

const auth =(req,res,next)=>{
	//verificar el token y obtener header de authorizacion
	try{
    console.log(req.headers);
	const auth =req.headers.authorization || "";
    console.log("auth",auth);
    ///quitar Bearer  con split
    const newAuth =auth.split(" ")[1];
    console.log(newAuth);
    ///verificar token
    const isVerified =jwt.verify(newAuth);
    let verified =false;
    if(isVerified){
        verified=true;
        console.log("is verified???", verified);
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


module.exports ={auth}