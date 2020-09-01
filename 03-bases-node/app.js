// requireds
// despues de una const o let + {}, es una destructuracion
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { createFile, listTable } = require('./functions/multiply');

if (!argv.base) argv.base = argv.b

let command = argv._[0];
let path = 'tables/';
let fileName = `tabla-${argv.base}-al-${argv.limit}.txt`
console.log(`${fileName}`);
// console.log(argv);
// return
switch (command) {
    case 'list':
        listTable(argv.base, argv.limit)
        break;

    case 'create':
        createFile(argv.base, argv.limit, path, fileName)
            .then(file => console.log(`Se ha creado el archivo ${ colors.green(file) }`))
            .catch((err) => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}