const express = require('express')
let app= express();
const fsPromises = require("fs/promises");


app.get("/",(req,res)=>{
	res.send("mensaje desde el nuevo rest")
})


app.get("/getAllKoders", async (request, response) => {
    const data = await fsPromises.readFile("./users.json", "utf-8")
    response.send(data);
  });

app.get("/koders/:name", async (req, res) => {
    // Path param
    const { name } = req.params;
    const db = await fsPromises.readFile("./users.json", "utf8");
    const parsedDb = JSON.parse(db);
    const filteredKoder = parsedDb.koders.filter(
        (koder) => koder.name.toLowerCase() === name.toLowerCase()
    )[0];
    res.json(filteredKoder);
});

app.listen(8000,()=>{
    console.log("Estoy conectado")
})