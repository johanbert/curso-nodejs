const fs = require('fs');
let listToDo = [];

const insertDB = () => {
    let path = 'db/';
    let fileName = 'data.json';
    let data = JSON.stringify(listToDo);
    fs.writeFile(`${ path }${ fileName }`, data, (err) => {
        if (err) throw err
        else return `${ path }${ fileName }`
    });
}
const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }

}
const create = (description) => {
    loadDB();
    let toDo = {
        description,
        complete: false
    };

    listToDo.push(toDo);
    insertDB();
    return toDo;
}
const getList = () => {
    loadDB();
    return listToDo;
}
const update = (description, complete = true) => {
    loadDB();
    // let index = listToDo.findIndex((task) => task.description === description)
    let index = listToDo.findIndex((task) => {
        return task.description === description
    })
    if (index >= 0) {
        listToDo[index].complete = complete;
        insertDB();
        return true;
    } else return false;
}
const remove = (description) => {
    loadDB()
    let newList = listToDo.filter((task) => task.description !== description);
    if (listToDo.length === newList) {
        return false
    } else {
        listToDo = newList;
        insertDB();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    remove
};