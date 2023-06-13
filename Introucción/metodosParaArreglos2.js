const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara', 45];

// console.log(nombres.indexOf('Rodrigo'));
// console.log(nombres.indexOf('Sergio')); /** -1 - no esta */

/** */
// console.log(nombres.lastIndexOf('Rafael'));

/** */

// nombres.forEach((nombre, index) => {
//     console.log(`Hola ${nombre} (${index})`);
// });

/** */

// const resultado = nombres.find((nombre) =>{
//     if(nombre[0] === 'E'){
//         return nombre;
//     }
// });

// console.log(resultado)

// const salida = nombres.map((nombre) => nombre.toUpperCase());
// console.log(salida)

// /** */
// const nombreCuatroLetras = nombres.filter((nombre) => {
// if(nombre.length === 5){
//     return nombre;
// }
// });

// console.log(nombreCuatroLetras)

/** */
// console.log(nombres.includes('Rafael'));
/** */

// const nombreValidos = nombres.every((nombre) => {
//     if(typeof nombre === 'string'){
//         return true;
//     }else{
//         return false;
//     }
// });

// console.log('¿Todos los nombres son validos? ' +nombreValidos);

/** */
const nombreValidos = nombres.some((nombre) =>{
    if(typeof nombre !== 'string'){
        return true;
    }else{
        return false;
    }
})
console.log('¿El arreglo es valido? ' +nombreValidos);
/** true - valor invalido 
 * false - valor valido
*/
