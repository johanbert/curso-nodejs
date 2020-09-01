const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');
// console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = toDo.getList();
        for (let task of list) {
            console.log('========To Do========'.green);
            console.log(task.description);
            console.log('Estado: ', task.complete);
            console.log('====================='.green);
        }

        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.complete)
        console.log(updated);
        break;
    case 'remove':
        let removed = toDo.remove(argv.description)
        console.log(removed);
        break;

    default:
        console.log('Comando no es reconocido');
}