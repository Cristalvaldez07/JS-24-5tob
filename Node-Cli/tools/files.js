
require ('colors') 

const fs = require ('fs') 
const path = require ('path'); 


const filePath = path.join (__dirname, '../db/task.json');


const loadTask = () => { 
    let listTask = {};

    console.log ("Ruta absoluta del proceso node: ".yellow, process.cwd() ) 


    console.log ("Ruta absoluta de nuestra base de datos: ".yellow, filePath)

    try { 
        listTask = require(filePath);
    } catch (error) {
        console.log ("Error cargando lista de bd".red, error);
        listTask =  {}
    }
    return listTask ;
}



const saveTask = (listTask) => {

    let data = JSON.stringify(listTask);


    fs.writeFile(filePath, data, (error) => { 
        if (error) {
            throw new Error("Error Create by me: --", error);
        }
    
    })

}

module.exports = { 
    loadTask, 
    saveTask 
}

