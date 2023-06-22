// const nombres = ['Arturo', 'Andres','Alejandro','Roberto','Adrian','Antonio','Angel'];

// for(let i = 0; i < nombres.length; i++){
//     if(nombres[i][0] !== 'A'){
//         console.log('Alto hay un nombre que no empiexa por la letra A');
//         console.log(nombres[i] + ' no empieza por la letra A');
//         break;
//     }
//     console.log(nombres[i]);
// }

/** continue */
const invitados = ['Carlos', 'Christian','Christopher','Jorge','Estefania','Erika','Manuel'];

console.log('Lista de personas aceptadas: ');

for(let i = 0; i < invitados.length ; i++){
    if(invitados[i] == 'Jorge'){
        continue;
    }
    console.log(invitados[i]);
}