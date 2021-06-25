const { Console } = require('console');
const fs = require('fs')

const GuardarDatos =(data) =>{
    const archivo= "./db/data.txt"
   fs.writeFileSync(archivo ,JSON.stringify(data));
}


const LeerArchivo = async () =>{
    const archivo= "./db/data.txt";

    if(fs.existsSync(archivo))
    {
     const info =    fs.readFileSync(archivo , {encoding:'utf-8'})
      const data = JSON.parse(info);
      return data

    }
    else
    {
        return null;
    }

}


module.exports ={
    GuardarDatos,
    LeerArchivo
}