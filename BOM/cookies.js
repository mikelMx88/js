const crearCookie = () => {
    document.cookie = 'nombre=mikel; expires=1 Jan 2024 01:00:00 UTC';
}


const iniciarSesion = () => {
    const usuario = prompt('Usuario:');
    document.cookie = `nombre=${usuario}; expires=1 Jan 2024 01:00:00 UTC`;
    alert('Sesion iniciada');
}


const cerrarSesion = () => {
    document.cookie = 'nombre=; expires=1 Jan 2023 01:00:00 UTC';
    console.log('Hasta luego');
}



console.log(document.cookie);

let usuario;

const cookies = document.cookie.split(';');
// console.log(cookies);

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    if(propiedad=='nombre'){
        usuario = cookie.split('=')[1];
    }
})


// console.log(usuario);

if(usuario){
    console.log('Hola '+usuario);
}else{
    console.log('Por favor inicia sesion');
}