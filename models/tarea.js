import { v4 as uuidv4 } from 'uuid'

//Clase individual tarea
class Tarea {
  id = "";
  desc = "";
  completadoEn

  constructor(desc = "") {
    this.id = uuidv4();
    this.desc = desc;
    this.completadoEn=null
  }
}
export default Tarea;
