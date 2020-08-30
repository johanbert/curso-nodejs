const fs = require('fs');
const { argv } = require('process');

let createFile = (base, path, fileName) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= 10; i++) {
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

module.exports = { createFile }
    // console.log(argv)