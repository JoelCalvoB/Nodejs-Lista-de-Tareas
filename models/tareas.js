const Tarea = require('./tarea');


class Tareas {
    _listado = {
        'abc': 123
    }

    constructor() {
        this._listado = {};
    }


    crearTarea(desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }


    get ListadoArray() {
        let NuevaLista = [];
        Object.keys(this._listado).forEach(resp => {
            const lista = this._listado[resp];
            NuevaLista.push(lista);

        })
        return NuevaLista;
    }


    cargarTareasArray(tareas) {
        tareas.forEach(res => {
            this._listado[res.id] = res;
        })
    }


    listadoTareasCompleto() {
        this.ListadoArray.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${idx}${desc}::${estado}`);
        })
    }


listarPendientesyCompletas(completas = true){
    let contador = 0;
    this.ListadoArray.forEach(tarea => {

        const { desc, completadoEn } = tarea;
        const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
        if (completas)
        {
            c++;

            console.log(`${contador.toString().green}${desc}::${estado}`);
        }
        else
        {
            if (!completas)
            {
                c++;

                console.log(`${contador.toString().green}${desc}::${estado}`);
            }
        }
    })
}
}


module.exports = Tareas;