
///construccion de pastel

/**
 * Ejercicio:
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
 */

///crear objeto
const pastel = {
    seLeyolaReceta: false,
    seConsiguieronLosIngredientes: false,
    sePreparoEnCasa: false,
    seHorneo: false,
    seDecoro:false
  }

///funcion leerReceta
const leerReceta = (pastel, leer) => {
    // Tardo 5 segundos para leer las instrucciones
    ///establecemos un error
    let error = null;
    setTimeout(() => {
      pastel.seLeyolaReceta = true;
      if(!pastel.seLeyolaReceta) {
        error = "Antes de continuar primero debes leer la receta";
      }
      //regresamos el pastel con las instrucciones leidas
      leer(error, pastel);
    }, 2000)
  }

///se consiguieron ingredientes:
  const seTienenIngrediente = (pastelInstruccionesLeidas, preparar) => {
    let error = null
    setTimeout(() => {
        pastelInstruccionesLeidas.seConsiguieronLosIngredientes = true;
      if(!pastelInstruccionesLeidas.seConsiguieronLosIngredientes) {
        error = "debes conseguir los ingredientes para continuar"
      }
      preparar(error, pastelInstruccionesLeidas);
    }, 2000)
  }

 /// se prepara
 const sePreparaPastel = (pastelconIngredientes, hornear) => {
    let error = null
    setTimeout(() => {
        pastelconIngredientes.sePreparoEnCasa = true;
      if(!pastelconIngredientes.sePreparoEnCasa) {
        error = "debes preparar parea continuar"
      }
      hornear(error, pastelconIngredientes);
    }, 2000)
  }
//se hornea
  const seHorneaPastel = (pastelpreparado, decorar) => {
    let error = null
    setTimeout(() => {
        pastelpreparado.seHorneo = true;
      if(!pastelpreparado.seHorneo) {
        error = "debes hornear parea continuar"
      }
      decorar(error, pastelpreparado);
    }, 2000)
  }

/// se decora

const decorar = (pastelHorneado) => {
    setTimeout(() => {
        pastelHorneado.seDecoro = true
      console.log("el pastel se decoro finalmente", pastelHorneado);
    }, 4000)
  }


  ///callbacks anonimas
  leerReceta(pastel, (error, pastelInstruccionesLeidas) => {
    if(error) {
      console.log(error)
      return;
    }
    // instrucciones se leyeron
    seTienenIngrediente(pastelInstruccionesLeidas, (error, pastelpreparado) => {
      if(error) {
        console.log(error)
        return;
      }
      // pastel ya se prepara
      sePreparaPastel(pastelpreparado, (error, pastelHorneado) => {
        if(error) {
          console.log(error)
          return;
        }
        seHorneaPastel(pastelHorneado,(error,pasteldecorado)=>{
            if(error) {
                console.log(error)
                return;
              }
              //paso final
              decorar(pasteldecorado);
        })
        
        
      })
    })
  });