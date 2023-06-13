const usuario = {
    nombre: 'Mike',
    edad: 27,
    amigos: ['Isra','Dani','Osvaldo'],
    saludo: () => {
        console.log('Hola');
    }
}

usuario.saludo();
/** nombre de las keys*/
const resultados = Object.keys(usuario);
console.log(resultados);

/** */
const valores = Object.values(usuario);
console.log(valores);

/** parejas */
const result = Object.entries(usuario);
console.log(result);

console.log(`El objeto tiene ${ result.length } propiedades`);