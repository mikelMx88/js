const amigos = ['Alejandro', 'Cesas', 'Manuel'];

// amigos.forEach((amigo, index) =>{
//     console.log(`El amigo ${index} es: ${amigo}`);
// })

amigos.forEach((amigo, index) => console.log(`El amigo ${index} es: ${amigo}`));

const persona = {
    nombre: 'Carlos',
    edad: 27,
    correo: 'correo@gmail.com'
};

for (propiedad in persona){
    persona[propiedad] = '';
}
console.log(persona);

/** Ciclo for of */

const etiquetas = document.head.children;
// console.log(etiquetas);

// etiquetas.forEach((etiqueta) =>{
//     console.log(etiqueta);
// });

// for(elemento of etiquetas){
//     console.log(elemento)
// }

// [...etiquetas];
// console.log([...etiquetas]);

[...etiquetas].forEach((elemento) => console.log(elemento))
