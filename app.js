const { crearArchivo, listarArchivo, listar } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.limite, argv.base);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${archivo}`))
            .catch(er => console.log(er));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}




// let parametro = argv[2];
// let base = parametro.split('=')[1];