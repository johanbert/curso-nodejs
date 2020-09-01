const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const options = {
    create: { description },
    update: {
        description,
        complete: {
            default: true,
            alias: 'c',
            desc: 'Marca como complete o pendiente la tarea'
        }
    },
    remove: {
        description
    }

}
const argv = require('yargs')
    .command('create', 'Crear una tarea por hacer', options.create)
    .command('update', 'Actualiza el estado de una tarea', options.update)
    .command('remove', 'Remueve una tarea', options.remove)
    .help()
    .argv;

module.exports = {
    argv
};