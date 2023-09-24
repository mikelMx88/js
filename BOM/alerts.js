/**
 * alerta regular
 */

// window.alert('Hola usuario');


/**
 * ventana de confirmación
 */

const ingresar = () =>{
    const accesoPermitido = confirm('¿Eres mayor de edad?');
    if(accesoPermitido){
        alert('Bienvenido');
    }else{
        alert('Le vamos a decir a tus padres');
    }
}


const saludo = () =>{
    const nombre = prompt('Escribe un nombre');
    alert(`Bienvenido ${nombre}`);
}