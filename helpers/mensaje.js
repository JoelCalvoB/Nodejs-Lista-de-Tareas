require('colors');

const MostrarMenu = () =>{

   return prominse = new Promise(resolve =>{
       console.clear();
    console.log("=========".green)
    console.log("Selecciona una opción".green)

    console.log("=========\n".green)
    console.log('1. Crear tarea');
    console.log('2. Listar tarea');
    console.log('3. Listar tarea completadas');
    console.log('4. Listar tareas pendeintes');
    console.log('5. Completar tareas');
    console.log('6. Borrar tareas pendientes');
    console.log('7. Salir \n');

    const readlinea = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readlinea.question(`Selecciones una Opción` , (opt)=>{
        readlinea.close();
        resolve(opt)
    });


   });

   }




const pausar = ()=>{

    return promise = new Promise(resolve =>{
        const readlinea = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readlinea.question(`\nPresione ${'enter'.green} para continuar:  \n` , (opt)=>{
    
            readlinea.close();
            resolve();
        })
    })
  
}



module.exports ={
    MostrarMenu,
    pausar
}
