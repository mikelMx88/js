// const nombre = 'Carlos';
// const edad = 27;

// const nombremDos = 'Alejandro';
// const edadDos = 24;

class Usuario{
    tipo =  'usuario';

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('Nuevo usuario registrado');
    }

    obtenerNombreCompleto(){
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
}

// new Usuario('Mikel', 'IBK');
const principal = new Usuario('Mikel', 'IBK');
console.log(principal.obtenerNombreCompleto());

const secundario = new Usuario('Mikael', 'AZ');
console.log(secundario.obtenerNombreCompleto());