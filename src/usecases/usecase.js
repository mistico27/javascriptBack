const User = require("../models/users.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt =require("../lib/jwt/jwt.lib")

///crear usuario
const createRegister =async(data)=>{
   let passwordEncryptada = await bcrypt.hash(data.password, saltRounds);
    data.password=passwordEncryptada;
    const user = await User.create(data);
    return user;
}

///login
const loginSignUp =async(email,password)=>{
    const userFound = await User.findOne({email})
    const isValidPassword= await bcrypt.compare(password, userFound.password)
    console.log("usuario encontrado",userFound);
    if(!userFound){
        const error = new Error("Invalid data");
        error.status=400;
        throw error;
    }
    if(!isValidPassword){
        const error = new Error("Invalid data");
        error.status=400;
        throw error;
    }
    const token = jwt.sign({user: userFound.email, id:userFound._id })
    console.log(token);
    return token;
}


module.exports = { createRegister,loginSignUp}
