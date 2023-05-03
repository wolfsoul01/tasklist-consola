import Tarea from "./tarea.js";
import colors from "colors";

/* Aqui esta la clase de tareas la cual es un conjunto de la clase tarea almacenada como un objeto  */



class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }
//////////////////////////////////////////////////////////////////////////////////
  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });

    return listado;
  }
//////////////////////////////////////////////////////////////////////////////////

  borrarTarea(id = "") {
    delete this._listado[id];
  }

//////////////////////////////////////////////////////////////////////////////////

  cargarTareas(tareas = []) {
    tareas.forEach((tareas) => {
      this._listado[tareas.id] = tareas;
    });
  }
//////////////////////////////////////////////////////////////////////////////////

  crearTarea(desc) {
    const t = new Tarea(desc);

    this._listado[t.id] = t;
  }

//////////////////////////////////////////////////////////////////////////////////

  listarTareas() {
    console.log();
    this.listadoArr.forEach((tarea, i) => {
      const completado = tarea.completadoEn
        ? `Completado`.green
        : `Pendiente`.red;

      console.log(`${`${i + 1}.`.green}${tarea.desc} :: ${completado}`);
    });
  }
//////////////////////////////////////////////////////////////////////////////////

  listarPendientesCompletadas(compl = true) {
    const busqueda = compl
      ? this.listadoArr.filter((tarea) => {
          return tarea.completadoEn !== null;
        })
      : this.listadoArr.filter((tarea) => {
          return tarea.completadoEn == null;
        });

    busqueda.forEach(({ desc, completadoEn }, i) => {
      let completado = completadoEn;
      if (!completado) {
        completado = completadoEn ? `Completado`.green : `Pendiente`.red;
      }

      console.log(`${`${i + 1}`.green}.${desc} :: ${completado}`);
    });
  }
//////////////////////////////////////////////////////////////////////////////////

  completarTareas(ids = []) {
    ids.forEach((id) => {
      if (!this._listado[id].completadoEn) {
        this._listado[id].completadoEn = new Date();
      }
    });

    this.listadoArr.forEach((tarea) => {

      if(!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn=null;
      }
    });
  } 
}

export default Tareas;
