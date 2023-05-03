/* require("colors");
const { stdout } = require("process");
const readline = require("readline");

const mostrarMenu = () => {
   return new Promise((resolve, reject) => { console.clear();
    console.log(`===========================`.green);
    console.log(`    Selecione un opcion     `.green);
    console.log(`=========================== \n`.green);
  
    console.log(`${`1.`.green} Crear tarea`);
    console.log(`${`2.`.green} Listar tareas`);
    console.log(`${`3.`.green} Listar tareas completadas `);
    console.log(`${`4.`.green} Listar tareas pendientes`);
    console.log(`${`5.`.green} Completar tarea(s)`);
    console.log(`${`6.`.green} Borrar tarea`);
    console.log(`${`0.`.green} Salir`);
  
   const rl=readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    rl.question('elija pendejo: ',(opt)=>{
      resolve(opt);
      rl.close()
    }); }) 
};

const pausa=()=>{

     return new Promise((resolve, reject) => {
        
         const rl=readline.createInterface({
             input:process.stdin,
             output:stdout
         });
     
         rl.question(` \nPresione ${`Enter`.red} para continuar`,(opt)=>{
             rl.close();
             resolve();
         });
    })
}

module.exports = {
  mostrarMenu,pausa
};
 */