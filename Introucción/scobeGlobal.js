var nombre = 'Mikel';
console.log(nombre)

const saludo = () => {
    console.log('Hola ' +nombre);
    nombre = 'Isra';

    console.log('El nuevo nombre es: ' +nombre);
}

saludo();
