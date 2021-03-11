

const description = { 
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea a realizar'
}

const title = { 
    demand: true,
    alias: 't',
    desc: 'Titulo de la tarea a realizar'
}

const completed = { 
    alias: 'c',
    default: true,
    desc: 'Marca como completada la tarea'
}
const erased = {
    alias: 'e',
    default: true,
    desc: 'Borrar la tarea'
}


const optionsCreate = { 
    description, 
    title
}

const optionsUpdate = {
    title,
    completed
}
const optionsErade = {
    title,
    erased
}


module.exports =  {
    optionsCreate,
    optionsUpdate,
    optionsUpdate
}








