require('dotenv').config() // lo mas pronto de nuestra aplicacion;
const express = require("express");
const mongoose = require("mongoose");

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
  console.log("estamos conectados a mongo!!!!")
})
.catch((err) => {
  console.log("We have an error", err);
})