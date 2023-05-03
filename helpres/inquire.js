import inquire from "inquirer";
import "colors";

/* Aqui van los menus de inquire para interactuar */


//Menu principal 
const inquireMenu = async () => {
  const preguntas = [
    {
      type: "list",
      name: "opcion",
      message: "¿Qué desea hacer?",
      choices: [
        {
          value: "1",
          name: `${"1.".green} Crear tarea`,
        },
        {
          value: "2",
          name: `${"2.".green} Listar tareas`,
        },
        {
          value: "3",
          name: `${"3.".green} Listar tareas completadas`,
        },
        {
          value: "4",
          name: `${"4.".green} Listar tareas pendientes`,
        },
        {
          value: "5",
          name: `${"5.".green} Completar tarea(s)`,
        },
        {
          value: "6",
          name: `${"6.".green} Borrar tarea`,
        },
        {
          value: "0",
          name: `${"0.".green} Salir`,
        },
      ],
    },
  ];
  console.clear();
  console.log("==========================".green);
  console.log("  Seleccione una opción".white);
  console.log("==========================\n".green);

  const { opcion } = await inquire.prompt(preguntas);

  return opcion;
};


const pausa = async () => {
  const preguntas = [
    {
      type: "input",
      name: "opt",
      message: `Presione ${`ENTER`.red} para continuar `,
    },
  ];
  console.log("\n");
  await inquire.prompt(preguntas);
};

const crearTarea = async () => {
  const preguntas = [
    {
      type: "input",
      name: "tarea",
      message: "Ingrse la tarea",
      validate: (value) => {
        if (value.length === 0) {
          return "Este campo no puede estar vacio ";
        }
        return true;
      },
    },
  ];

  const { tarea } = await inquire.prompt(preguntas);
  return tarea;
};

const completarTareas = async (tareas) => {
  const pregunta = [
    {
      type: "list",
      name: "tareas",
      message: "Seleccione las tareas a completar ",
      choices: tareas,
    },
  ];

  await inquire.prompt(pregunta);
};

//Para el chekcbox de completar tareas
const copmpletarTareasListado = async (tareas = []) => {
  const choices = tareas.map((tarea) => {
    if (tarea.completadoEn) {
      return { value: tarea.id, name: tarea.desc, checked: true };
    }
    return{ value: tarea.id, name: tarea.desc, checked: false};
  });
  const t = [
    {
      type: "checkbox",
      name: "ids",
      message: "Selecione",
      choices,
    },
  ];

  return await inquire.prompt(t);
};


const borrarTareasMenu = async (tareas = []) => {
  const choices = tareas.map((tarea) => {
    return { value: tarea.id, name: tarea.desc };
  });

  const listado = [
    {
      type: "checkbox",
      name: "borradas",
      message: "Seleccione las tareas a eliminar",
      choices: choices,
    },
  ];

  return await inquire.prompt(listado);
};

const confirmMenu = async (mess = "") => {
  const pregunta = [
    {
      type: "confirm",
      message: mess,
      name: "resp",
    },
  ];

  return await inquire.prompt(pregunta);
};

export {
  inquireMenu,
  pausa,
  crearTarea,
  completarTareas,
  borrarTareasMenu,
  confirmMenu,
  copmpletarTareasListado,
};
