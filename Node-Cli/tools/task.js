require ('colors')
const files = require ('./files');



const createTask = (title,desc) =>  { 

    let listTask = files.loadTask

    if (title in listTask) { 
        console.log("Esta tarea existe!".red) ;
    } else { 

        listTask [title] = { 
            title,
            desc,
            completed: false 
    }
    files.saveTask(listTask);


} 
return listTask [title];
}




const updateTask = (title) => {

    let list = files.loadTask ();

    if (title in list) {
        list [title] = {...list[title], completed: true}
        files.saveTask(list);
    } else {
        console.log(`Este titulo no existe ${title}`.red) ;
    }
}




const eraseTask = (title) => {
let list = files.loadTask ();

if (title in list) {
    delete list [title]
    files.saveTask(list);
    } else {
    console.log (`Este titulo no existe ${title}`.red);
    }
}


module.exports = {
 createTask,
 eraseTask,
 updateTask
}