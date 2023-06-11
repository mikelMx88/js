const usuario= {
    nombre: 'Mikel',
    pais: 'México'
}

// if(usuario.pais === 'México'){
//     console.log('El usuario es mexicano');
// }else if(usuario.pais === 'España'){
//     console.log('El usuario es español');
// }else if(usuario.pais == 'Argentina'){
//     console.log('El usuario es Argentino');
// }else{
//     console.log('El usuario es de otro país');
// }

switch(usuario.pais){
    case 'México':
        console.log('El usuario es mexicano');
        break;
    case 'España':
        console.log('El usuario es español');
        break;
    case 'Argentina':
        console.log('El usuario es argentino');
        break;
    default:
        console.log('El usuario es de otro país');
}