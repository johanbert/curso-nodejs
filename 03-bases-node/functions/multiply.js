const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {
    console.log('===============');
    console.log(`Tabla de ${base}`.green);
    console.log('===============');
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${ i } = ${base *i}\n`);
    }
}

let createFile = (base, limit = 10, path, fileName) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${ i } = ${base *i}\n`;
        }

        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }

        fs.writeFile(`${ path }${ fileName }`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`${ path }${ fileName }`)
        });
    });

}

module.exports = {
        createFile,
        listTable
    }
    // console.log(argv)