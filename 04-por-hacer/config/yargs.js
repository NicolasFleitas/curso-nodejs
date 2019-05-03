//definir los comandos

const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea para realizar"
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')

    .command('crear', 'Crea un tarea para realizar', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un tarea', {
        descripcion
    }) 
    .help()
    .argv;

module.exports = {
    argv
}