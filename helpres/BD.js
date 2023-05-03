import fs from "fs";

const archivo = "./db/data.json";

export const guardarBD = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

export const leerBaseDeatos = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const info = fs.readFileSync(archivo, "utf-8");
  if (info.length === 0) return null;
  return JSON.parse(info);
};
