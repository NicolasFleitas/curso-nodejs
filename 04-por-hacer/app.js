// const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'listar':
        console.log('Muestra las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('comando no reconocido');
        break;
}

console.log(argv);