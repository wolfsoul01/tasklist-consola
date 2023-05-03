const { createRequire } = require('module');
const require = createRequire(import.meta.url);
const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'Por favor ingrese su nombre de usuario:'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Por favor ingrese su contraseña:'
  }
]).then(({username}) => {
  console.log(`Bienvenido, ${username}!`);
});
