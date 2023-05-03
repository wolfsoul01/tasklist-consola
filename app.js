import("colors");
import {
  inquireMenu,
  pausa,
  crearTarea,
  completarTareas,
  borrarTareasMenu,
  confirmMenu,
  copmpletarTareasListado,
} from "./helpres/inquire.js";
import Tareas from "./models/tareas.js";
import { guardarBD, leerBaseDeatos } from "./helpres/BD.js";

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const data = leerBaseDeatos();

  if (data) {
    tareas.cargarTareas(data);
  }

  do {
    //Mostrar el menu principal
    opt = await inquireMenu(); //capturar la obcion seleccionada
    switch (opt) {
      //Crae tareas
      case "1":
        const desc = await crearTarea();
        tareas.crearTarea(desc);

        break;

      //Listar tareas
      case "2":
        tareas.listarTareas();

        break;

      //Listar tareas completadas
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;

      //Listar tareas pendientes
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;

      //Completar tareas
      case "5":
        const { ids } = await copmpletarTareasListado(tareas.listadoArr);
        tareas.completarTareas(ids);
        break;

      //Borrar tareas
      case "6":
        const { borradas } = await borrarTareasMenu(tareas.listadoArr);
        if (borradas.length !== 0) {
          const { resp } = await confirmMenu("Estas seguro ");
          if (resp) {
            borradas.forEach((e) => {
              tareas.borrarTarea(e);
              console.log("Tarea Borrada :)");
            });
          }
        }

        break;

      case "0":
        return 0;
        break;
    }

    guardarBD(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");
};

main();
