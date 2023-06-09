const express = require("express");
const app = express();

const mongoose = require('mongoose');

const url='mongodb+srv://cristianb72:30vxY4BnKpy54mj7@cluster0.wxjolyf.mongodb.net/25js?retryWrites=true&w=majority'
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
const Koder = mongoose.model("koders", koderSchema, "koders");
    
app.get("/",(req,res)=>{
    res.json("hey como abndas");
})
    ////cuando el valor y la propiedad tienen exactamente el mismo valor  no hayq eu parametrizar
app.get("/koders",async(req,res)=>{
    try{
        const koders= await Koder.find(req.query);
        console.log("hola"+koders);
        res.json({
          success:true,
          data:koders
        })
        
    }catch(err){
        res.status(500).json(err);
    }
})

/////
app.post("/koders", async(req,res)=>{
	try{
	const koder = await Koder.create(req.body)
  res.status(201);
	res.json({
    success:true,
    data:koder
  })
	}catch(err){
    res.status(400).json(err.message);
	}
})
///find by id

app.get("/koders/:id",async(req,res)=>{

  try{
      const koder = await Koder.findById(req.params.id);
      res.status(200).json(koder); 
  }catch(err){
      res.status(500)
      res.json({
        success:false,
        message:"usuario no fue encontrado"
      })
  }
});

app.delete("/koders/:id",async(req,res)=>{
	const {id}= req.params;
	try{
		const deleteKoder = await Koder.findById(id);
      if(!deleteKoder){
        res.status(404).json("the koder was not found so I can not delete it ")
      }else{

        await deleteKoder.deleteOne();
        res.status(200).json("the koder has been Deleted successfully")
      }
  }catch(err){
      res.status(500).json(err);
  } 

})

app.put('/koders/:id',async(req,res)=>{
  const {id}= req.params;
  try{
  const  koderModificado = await Koder.findById(id);
      await koderModificado.updateOne({$set:req.body});
      res.status(200).json("the koder has been updated")
  }catch(err){
      res.status(500).json(err);
  } 
});


app.listen(8800,()=>{
    console.log("BackEnd server is about to FIRE   !!!!");
})