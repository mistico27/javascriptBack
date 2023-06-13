/**
 * server.js
    aqui van las ejecuciones de  los middlewares
 * el endpoint de home
*/

const express = require("express")
const app= express();

app.use(express.json())
const routerKoder = require("./routes/koder.routes");
///rutas
app.use("/koders", routerKoder);

app.get("/",(req,res)=>{
	res.json("nuestra api esta funcionando")
})


module.exports=app;