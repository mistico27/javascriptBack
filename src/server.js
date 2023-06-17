/**
 * server.js
    aqui van las ejecuciones de  los middlewares
 * el endpoint de home
*/

const express = require("express")
const app= express();
const cors = require("cors")
app.use(cors())
app.use(express.json())

const routerKoder = require("./routes/koder.routes");
const routerMentor =require("./routes/mentor.routes");
const userMentor =require("./routes/user.routes");
const auth =require("./routes/auth.routes");

///rutas
app.use("/koders", routerKoder);
app.use("/mentores",routerMentor);
app.use("/user",userMentor);
app.use("/auth",auth);

app.get("/",(req,res)=>{
	res.json("nuestra api esta funcionando")
})


module.exports=app;