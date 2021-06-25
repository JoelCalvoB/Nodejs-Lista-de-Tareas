const inquirer = require('inquirer');
require('colors');




const inquireMenu = async()  =>{
    //console.clear();
    console.log("=========".green)
    console.log("Selecciona una opción".green)
    console.log("=========".green)

const {   opcion }= await inquirer.prompt(MenuOpt);

return  opcion;

}


const MenuOpt= [
    {
        type:'list',
        name:'opcion',
        message:'¿Que desea hacer?',
        choices:[
            {
                value:'1',
                name:'Crear Tarea'
            },
            {
                value:'2',
                name:'Listar Tareas'
            },
            {
                value:'3',
                name:'Listar Tareas Completadas'
            },
            {
                value:'4',
                name:'Listar Tareas Pendientes'
            },
            {
                value:'5',
                name:'Completar Tareas'
            },
            {
                value:'6',
                name:'Borrar Tareas'
            }
            ,
            {
                value:'0',
                name:'Salir'
            }
        ]
    }
]




const pausa = async() =>{

const question =[
{
    type: 'input',
    name:'enter',
    message:'PRESIONES ENTER PARA CONTINUAR'
}
]    
   console.log('\n')
    await inquirer.prompt(question);

}


const leerInput= async(mensaje) =>{
    const question = [
        {
            type:'input',
            name:'desc',
            msg: mensaje,
            validate(value){
                if (value.length===0)
                {
                    return 'Por favor ingrese un valor '
                }
                return true;
            }
        }
    ];

const {desc}= await inquirer.prompt(question);
return desc;

}



module.exports ={
    inquireMenu,
    pausa,
    leerInput
}