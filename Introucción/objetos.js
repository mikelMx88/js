const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];
const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'correo@correo@gmail.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Negro', 'Azul'],
    saludo: function(){
        alert('Hola');
    }
}



console.log(persona.nombre);
console.log(persona['edad']);

const variable = 'correo';
console.log(persona[variable]);

persona.pais = 'México';
console.log(persona)

persona.pais = 'Corea del sur';
console.log(persona);

persona.saludo()

// console.log(persona.suscripciones.correo);