/*const http = require("http");

// Declarando el servidor


const server = http.createServer((request, response) => {
    // Leer la request
    const { url, method } = request;
    const endpoints = {
        GET: {
          "/hola": "Mensaje totalmente diferente de los demas",
          "/adios": "Mensaje totalmente diferente de los demas con ADIOS",
        },
        POST: {
          "/hola": "Rita de post"
        },
        PATCH: {
          "/hola": "Ruta de patch en holaaaa"
        },
        DELETE: {
          "/adios": "Ruta adioooos delete"
        }
    };


    response.write(endpoints[method][url]);
    // Responder
    response.end();
});

// Prender nuestro servidor
server.listen(8080, () => {
    console.log("Nuestro servidor esta prendido!!!");
});
*/

const express = require('express')
let app = express();


app.get("/",function(req,res){
    res.write("hola como andan amiguitos estoy en home")
    res.end();
})

app.patch("/home",function(req,res){
    res.write("Hey amigos estoy a punto de hacer un update")
    res.end();
})

app.post("/home",function(req,res){
    res.write("estoy enviando esta infor con post")
    res.end();
})

app.delete("/home",function(req,res){
    res.write("te eliminare con mi Api")
    res.end();
})

app.listen(8080, () => {
    console.log("Nuestro servidor esta prendido, is on fire!!!");
});