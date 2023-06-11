const saludo = (nombre = 'amigo') => {
    console.log(`Hola ${nombre}`);
}


// saludo('Mikel');
// saludo('Isra');
// saludo('Dany');
// saludo();

/**
 * ? multiples parametro
 */

const operacion = (tipoOperacion, numero1, numero2) => {
    if(tipoOperacion == 'suma'){
        console.log(numero1 + numero2);
    }else{
        console.log(numero1 - numero2);
    }
}

operacion('suma', 200,5);
operacion('resta', 20,45);
