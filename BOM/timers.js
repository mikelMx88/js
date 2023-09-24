
const saludo = () => {
    console.log('Hola');
}

// setTimeout(() =>{
//     console.log('Hola');
// }, 5000);

// let id;

// const iniciar = () =>{
//     console.log('Iniciando timer');
//     id = setTimeout(saludo, 5000);
// }

// const parar = () =>{
//     console.log('Parando timer');
//     clearTimeout(id);
// }

let cuenta = 0;
let id;

const iniciar = () =>{
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);
}

const parar = () =>{
    console.log('Parar la cuenta');
    clearInterval(id);
}
