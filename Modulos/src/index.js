// import { nombre as nombreImportado, obtenerPost } from "./namedExports";

// console.log("Mi nombre es: " + nombreImportado);
// console.log(obtenerPost);

import * as datos from "./namedExports";

// console.log(datos.nombre);
// console.log(datos.obtenerPost());


import obtener  from "./defaultExport,js";
console.log(obtener());

/** empty imports */
import './emptyExport';
import { correo } from "./emptyExport";
console.log(correo);