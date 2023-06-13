const colores = ['Rojo', 'Verde', 'Azul'];
console.log(colores.length);

/** */
// document.body.innerHTML =  colores.toString();

/** */
console.log(colores.join('- -'));

/** */

const letras = ['c','b','d','a'];
console.log(letras.sort());

const numeros = [3, 2, 4, 1];
console.log(numeros.sort());

/** */

console.log(colores.reverse());
console.log(numeros.reverse());
/** */
const arreglo1 = [1, 2, 3];
const arreglo2 = ['A', 'B', 'C'];

const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

/** */
colores.push('Violeta');
colores.push('Amarillo');
console.log(colores);

/** */
colores.pop();
console.log(colores);

/** */
dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
console.log(dias);
// dias.shift();

diaEliminado = dias.shift();
console.log(diaEliminado);

console.log(dias);

/** */
dias.unshift('Mike');
console.log(dias);

/** */
const amigos = ['Isra', 'Daniel', 'Osvaldo'];
console.log(amigos);
/** donde inicia, cuantos elemina, que inserta */
amigos.splice(2, 1, 'Edgar');
console.log(amigos);

/** */
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranaja', 'Melon'];
console.log(frutas);
const frutasFavoritas = frutas.slice(1,5);
console.log(frutasFavoritas);

/** */
