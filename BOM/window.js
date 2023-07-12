// console.log(window)
// window.alert('hola')

// alert('');

console.log(`La ventana de tu navegador mide ${ window.innerWidth}px de ancho`);
console.log(`La ventana de tu navegador mide ${ window.innerHeight}px de alto`);

// open - ventanas
let ventana;
const abrirVentana = () =>{
    // ventana = window.open('https://google.com', 'Ventana nueva', 'width=500, height=500');
    ventana = window.open('', 'Ventana nueva', 'width=500, height=500');
    ventana.document.write('<h1>Hola, escribiendo</h1>');
}


const cerrarVentana = () =>{
    ventana.close();
}

// objeto screen
console.log('Ancho de pantalla:', window.screen.width);
console.log('Alto de pantalla:', window.screen.height);

console.log('Ancho de pantalla sin barra de window:', window.screen.availWidth);
console.log('Alto de pantalla sin barra de window:', window.screen.availHeight);