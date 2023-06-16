const User = require("../models/users.model");
const bcrypt = require('bcrypt');
const createError = require("http-errors")
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
        throw createError(400, "Invalid data");
    }
    if(!isValidPassword){
        throw createError(400, "Invalid data");
    }
    ///este viene de la librearia jwt.lib.js
    const token = jwt.sign({user: userFound.email, id:userFound._id })
    console.log(token);
    return token;
}


const list =(filters)=>{
	const user = User.find(filters);
	return user;
}

const get =async(id)=>{
	const user = await User.findById(id);
    if(!user){
        throw createError(404, "User Not Found");
    }
	return user;

}

////update

const UpdateUser = async(req,res)=>{
    const {id}= req.params;
    const  newUser = await User.findById(id);
    console.log("hey soy el new user",newUser);
    return newUser;
}

///Delete
const DeleteUser =async(id)=>{
	const UserToDelete = await User.findByIdAndDelete(id);
    if(!UserToDelete){
        throw createError(404, "User Not Found");
    }
	return UserToDelete;
}




module.exports = { createRegister,loginSignUp,get ,list,DeleteUser, UpdateUser}
