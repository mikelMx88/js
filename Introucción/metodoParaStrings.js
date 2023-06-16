const texto = "Hola yo soy Mikel";
console.log(texto);

/** */
console.log(texto.indexOf('o'));
console.log(texto.lastIndexOf('o'));

/** */
const index = texto.indexOf('M');
const lastIndex = texto.lastIndexOf('l');
console.log(texto.slice(index, lastIndex));
console.log(texto.slice(-5,-1));

/** */
console.log(texto.replace('Mikel', 'IBK'));
/** */
console.log(texto.split(' '));

/** */
console.log(texto.toUpperCase());
console.log(texto.toLocaleLowerCase());
// console.log(texto.cap);