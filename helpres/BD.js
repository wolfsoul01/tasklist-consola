import fs from "fs";

/* Aqui van las funciones que se enargan de controlar la BD */


// ruta de la DB 
const archivo = "./db/data.json";

// Para guardar 
export const guardarBD = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};


//Para cargar las tareas 
export const leerBaseDeatos = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const info = fs.readFileSync(archivo, "utf-8");
  if (info.length === 0) return null;
  return JSON.parse(info);
};
