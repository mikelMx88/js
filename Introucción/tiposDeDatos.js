const nombre = 'Mikel';
const parrafo = 'Este es un "parrafo"';
const parrafo2 = "Este es un 'parrafo'";
const parrafo3 = 'Este es un \'parrafo\'';
console.log(parrafo)
console.log(parrafo2)
console.log(parrafo3)

const numero = 4;
const numero2 = -4.123;

const usuarioConectado = false;
const mayorQue = 1 > 2;

console.log(mayorQue)

const arraglo = ['texto', 10, true, {propiedad: 'valor'}, [1,2,3]];
console.log(arraglo)

const persona = {
    nombre: 'Carlos',
    edad: 27,
    carro: {
        marca: 'Kia',
        color: 'Azul'
    }
};

console.log(persona)
console.log(persona.nombre)
console.log(persona.carro)
console.log(persona.carro.color)


function hola(){
    console.log('Hola')
}

hola();

const miVariable = null;
const miVariable2 = undefined;