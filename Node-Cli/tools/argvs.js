
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const argv_all = yargs(hideBin(process.argv))
const options = require('./options');

const argv = argv_all 
     .command('Create', 'Create new task', options.optionsCreate) 
     .command('Update', 'Actualizar con completed', options.optionsUpdate)
     .command('Delete', 'Delete task', options.optionsErase)
     .help()
     .argv;

     module.exports = { argv }