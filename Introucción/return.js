const operacion = (tipo, numero1, numero2) => {
    // return;
    if(tipo === 'suma'){
        return numero1 + numero2;
    }else if(tipo === 'resta'){
        return numero1 - numero2;
    }
}

const salida = operacion('suma', 100, 32);

console.log(salida);