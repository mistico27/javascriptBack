const express = require("express");
const app = express();

const mongoose = require('mongoose');

const url='mongodb+srv://cristianb72:30vxY4BnKpy54mj7@cluster0.wxjolyf.mongodb.net/nuevoSchema?retryWrites=true&w=majority'
mongoose.connect(url,{
}).then(()=>{console.log("estoy conectado a la base  de datos de mongo carnalitos");})
.catch((e)=>console.log("El error de conexion es " +e));

app.use(express.json());
const koderSchema = new mongoose.Schema({
    name: {
      type: String,
      minlength: 3,
      maxlength: 10,
      required: true
    },
    module: {
      type: String
    },
    generation: {
      type: String
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 100
    },
    sex: {
      type: String,
      enum: ["f", "m", "o"]
    }
  })

////modelo mayuscula y singular
const Koders = mongoose.model("koders", koderSchema)
    
app.get("/",(req,res)=>{
    res.json("hey como abndas");
})
    
app.get("/allUsers/:id",async(req,res)=>{
    try{
        const  koder = await Koders.findById(req.params.id);
        const{...others}=koder._doc
        console.log(koder);

        res.status(200).json(others)
    }catch(err){
        res.status(500).json(err);
    }
})



app.listen(8800,()=>{
    console.log("BackEnd server is about to FIRE   !!!!");
})