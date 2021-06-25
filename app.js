//const {MostrarMenu , pausar} = require('./helpers/mensaje')
const {inquireMenu , pausa , leerInput} = require('./helpers/inquire');
const Tareas = require('./models/tareas');
const {GuardarDatos , LeerArchivo } = require ('./helpers/guardarData')

require('colors');


const main = async() =>{

    let opt= '';
    const tareas = new Tareas();

const TareasDb= await LeerArchivo();
if (TareasDb)
{
   tareas.cargarTareasArray(TareasDb);
}

do{
   opt= await inquireMenu();    /// espera la respuesta

switch (opt) {
    case '1':
        const desc= await leerInput('Descripcion = ')
        tareas.crearTarea( desc );
        console.log(desc);
        
        break;
        case '2':
     tareas.listadoTareasCompleto(true);

        break;
        case '3':
         tareas.listadoTareasCompleto(false);
    
            break;
        

}

  /// GuardarDatos(tareas.ListadoArray);
   await pausa();
} while(opt !=='0')

 
}

main();
