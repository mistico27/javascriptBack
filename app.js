const rgv = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors');
 

console.log("rgv",rgv);

const nombres = [
    "Andres",
    "Andres de Anda",
    "Christian",
    "Damian",
    "Dani",
    "Diego",
    "Dan",
    "Gustavo",
    "Ignacio",
    "Jorge",
    "Karla",
    "Lau",
    "Luis",
    "Mara",
    "Max",
    "Pao",
    "Roberto",
    "Samantha"
  ]

  const nombre =rgv.nombre;

  function sayHelloOrVete (nombre){
    
        if(nombres.includes(nombre)){
            console.log(colors.rainbow(`Bienvenido ${nombre}`));
            
        }else{
            console.log(colors.red(`largate ${nombre}`  ));
        }
    
  }

  sayHelloOrVete(nombre);