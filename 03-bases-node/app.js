// requireds
// despues de una const o let + {}, es una destructuracion
const { createFile } = require('./functions/multiply');

// let base = '15';

let argv = process.argv;
let parameter = argv[2]
let base = parameter.split('=')[1]
let path = 'tables/';
let fileName = `tabla-${base}.txt`

createFile(base, path, fileName)

.then(file => console.log(`Se ha creado el archivo ${ file }`))
    .catch((err) => console.log(err));

// const { creararchivo } = require('./functions/multiply');

//let comando = argv._[0];
// switch (comando) {
//     case 'listar':
//         console.log('listar');
//         break;

//     case 'listar':
//         console.log('crear');
//         break;

//     default:
//         console.log('comando no reconocido');

// }