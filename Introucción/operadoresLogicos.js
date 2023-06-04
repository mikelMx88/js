const nombre = 'Carlos';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;
// const permitirAcceso = edad >= 18 && tieneEntrada;
// console.log("Acceso permitido al concierto: "+ permitirAcceso)

const permitirAcceso = (tienePermiso || edad >= 18) && tieneEntrada;
console.log("Acceso permitido al concierto: "+ permitirAcceso)

const variable = true;
console.log(!variable)

// !tieneEntrada
