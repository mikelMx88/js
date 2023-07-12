'use strict';

// export default () => {
//     return{
//         nombre: 'Mikel',
//         correo: 'mikel@correo.com'
//     };
// }



const obtenerUsuario = () => {
    return {
        nombre: 'Mikel',
        correo: 'mikel@correo.com'
    };
};

console.log('Soy codigo que se ejecuta desde el empty export');

const correo = 'correo@correo.com';

// import { nombre as nombreImportado, obtenerPost } from "./namedExports";

console.log(obtenerUsuario());
console.log(correo);
