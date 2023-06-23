const  promesa = new Promise((resolve, reject) => {
    //Action
    setTimeout(() => {
        const exito = true;
        if(exito){
            resolve('La operación tuvo exito');
        }else{
            reject('La operación no tuvo exito');
        }
    }, 4000);
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});