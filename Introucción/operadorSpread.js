// const frutas = ['Manzana', 'Pera', 'Piña', 'Melon', 'Uvas'];
// const comidaFavorita = ['Pizza', 'Sushi', ...frutas];

// console.log(frutas);
// console.log(comidaFavorita);


// const datosLogin = {
//     nombre: 'Arturo',
//     correo: 'correo@correo.com',
//     password: '123'
// };

// const usuario = {
//     ...datosLogin,
//     nombre: 'Mikel',
//     edad: 27
// }

// console.log(usuario)
/** Rest */
const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
}

registrarUsuario('Mikel', 'mikel@gmai.com');
registrarUsuario('Mike', 'mike@gmail.com', 28, 'México');

/**Destructuracion de un objeto */
const amigos = ['Mikel', 'Daniel', 'Israel'];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];
// console.log(primerAmigo);
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;
console.log(primerAmigo);
console.log(segundoAmigo);
console.log(tercerAmigo);

/** acceder a objeto */
const persona = {
    nombre: 'Mikel',
    edad: 27,
    pais: 'México'
}

const { nombre, pais, edad } = persona;
console.log(nombre, pais);


/** Imprimir */

// const mostrarEdad = (nombre, edad) =>{
//     console.log(`${nombre} tiene ${edad} años`);
// }

// mostrarEdad(persona.nombre, persona.edad);
// mostrarEdad(nombre,edad);

const mostrarEdad = ({nombre, edad}) =>{
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad(persona);