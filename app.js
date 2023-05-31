const { default: mongoose } = require('mongoose');
const mngoose = require('mongoose');
const url='mongodb+srv://cristianb72:30vxY4BnKpy54mj7@cluster0.wxjolyf.mongodb.net/nuevoSchema?retryWrites=true&w=majority'
mongoose.connect(url,{

}).then(()=>{console.log("estoy conectado a la abse  de datos de mongo putos");})
.catch((e)=>console.log("El error de conexion es " +e))

const nuevoesquema =mngoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
})

const personasModel =mngoose.model('nuevoschemas',nuevoesquema)
///mostrarnuevoSchema

const mostrar = async()=>{
    const personas =await personasModel.find();
    console.log("hey"+personas);
}

///crear
const crear = async ()=>{
    const persona = new personasModel({
        nombre:'Pedro',
        edad:34,
        pais:"Argentina"
    })
    const resultado = await persona.save();
    console.log(resultado);
}

//Editar
const actualizar = async (id)=>{
    const persona = await personasModel.updateOne({_id:id},{
        $set:{
            nombre:'Pedro Modificado',
            edad:67,
        }
    })
}
//const borrar
const eliminar =async (id)=>{
    const persona = await personasModel.deleteOne({_id:id})
    console.log(persona);
}

//actualizar('64771e6659ff9a9794114ced');
//crear();
eliminar('64771f92c9bfc7014ddba23e');
mostrar();