const usuario = {
    edad: 17,
    pais: 'México',
    ticket: false
};

// if(usuario.edad > 17 && usuario.ticket){
//     console.log("Eres mayor de edad, puedes entrar");
// }else{
//     if(usuario.edad < 18){
//         console.log("No eres mayor de edad, no puedes entrar");
//     }else{
//         console.log("Eres mayor de edad pero no tienes ticket, no puedes entrar");
//     }
// }

if(usuario.pais === 'México'){
    console.log("El usuario es mexicano");
}else if(usuario.pais == 'Colombia'){
    console.log("El usuario es colombiano");
}else if(usuario.pais == 'España'){
    console.log("El usuario es español");
}else{
    console.log("El usuario es de otro páis");
}