const express = require('express')
let app= express();
const fsPromises = require("fs/promises");
app.use(express.json()) // Parsear todo lo que el cliente me manda a JSON

app.get("/",(req,res)=>{
	res.send("mensaje desde el nuevo rest")
})


  app.get("/getAllKoders", async (req, res) => {
    const { module } = req.query;
    const db = await fsPromises.readFile("./users.json", "utf8"); // leemos base de datos
    const parsedDB = JSON.parse(db); // parseamos json
    const filteredKoders = parsedDB.koders.filter(koder => module === koder.module)
    // Esta vacio, no filtro
    if(filteredKoders.length === 0) {
        res.json(parsedDB.koders)
    } else {
        res.json(filteredKoders); // respondemos con header de Content-Type -> application/json
    }
});

/**
 * Ejercicio
 * 2 endpoints -
 * 1.er Donde me filtren por age los mentores
 * 2.do Donde obtengamos un mentor en especifico con su nombre
 */
///ejercicio I
app.get("/mentor", async (req, res) => {
    const { age } = req.query;
    const db = await fsPromises.readFile("./users.json", "utf8"); // leemos base de datos
    const parsedDB = JSON.parse(db); // parseamos json
    const filteredMentors = parsedDB.mentors.filter(mentor =>  mentor.age===age)
    // Esta vacio, no filtro
    if(age){
    if(filteredMentors.length === 0) {
        res.json({message:"usuario no encontrado"})
    } else {
        res.json(filteredMentors); // respondemos con header de Content-Type -> application/json
    }
    } else{
        res.json(parsedDB.mentors)
    }
});

app.get("/NameMentor", async (req, res) => {
    const { name } = req.query;
    const db = await fsPromises.readFile("./users.json", "utf8"); // leemos base de datos
    const parsedDB = JSON.parse(db); // parseamos json
    const filteredMentors = parsedDB.mentors.filter(mentor => name === mentor.name)
    // Esta vacio, no filtro
    if(filteredMentors.length === 0) {
        res.json(parsedDB.mentors)
    } else {
        res.json(filteredMentors); // respondemos con header de Content-Type -> application/json
    }
});


///Register
app.post("/koders", async (req, res) => {
    const db = await fsPromises.readFile("./users.json", "utf8");
    const parsedDb = JSON.parse(db);
    const koder = {
        id: parsedDb.koders.length + 1,
        ...req.body
    }

    parsedDb.koders.push(koder);
    await fsPromises.writeFile("./users.json", JSON.stringify(parsedDb, "\n", 4));
    
    res.json(koder)
})

////editar usuario
app.patch("/koders/:id", async (req, res) => {
    // Parametros
    const { id } = req.params;
    // Acceder a nuestra base de datos
    const db = await fsPromises.readFile("./users.json", "utf8");
    const parsedDb = JSON.parse(db);
    // Encontrar indice de koder a actualizar
    const index = parsedDb.koders.findIndex(koder=>koder.id===parseInt(id))

  
    // Crear nuestro objeto nuevo
    const updatedKoder = {
      ...parsedDb.koders[index], // ponme todo lo que ya tengas
      ...req.body // agregame lo nuevo
    }
    // Actualizamos con el indice en la base de datos
    parsedDb.koders[index] = updatedKoder
  
    // @ts-ignore
    // Escribimos ya actualiza en nuestra base de datos
    await fsPromises.writeFile("./users.json", JSON.stringify(parsedDb, "\n", 4));
  
    // Response con el koder actualizado
    res.json(updatedKoder);
  })
    





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