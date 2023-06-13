require('dotenv').config() // lo mas pronto de nuestra aplicacion;
const mongoose = require("mongoose");
const appServer =require("./src/server")

/**
 * 1. Conexion a base de datos
 * 2. Prender servidor
 */
const { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
// Vamos a ocultar
// Variables de entorno
const databaseURL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
mongoose.connect(databaseURL)
.then(() => {
  console.log("estamos conectados a mongo!!!!");
  appServer.listen(8800,()=>{
    console.log("BackEnd server is ready and running   !!!!");
  })
})
.catch((err) => {
  console.log("We have an error", err);
});


