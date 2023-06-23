class Usuario {
    constructor(usuario, password){
        this.usuario = usuario;
        this.password = password;
    }

    obtenerPost(){
        const posts = ['post1','post2'];
        return posts;
    }
}

class Moderador extends Usuario{
    constructor(usuario, contraseña, permisos){
        super(usuario, contraseña);
        this.permisos = permisos;
    }

    borrarPost(id){
        if(this.permisos.includes('borrar')){
            console.log(`El post con el ${id} ha sido borrado`);
        }else{
            console.log('No tienes los permisos para borrar post');
        }
    }
}

const usuario = new Usuario('Carlos', '123');
console.log(usuario.obtenerPost())
// console.log(usuario.permisos);
// usuario.borrarPost(1);

const moderador = new Moderador('Mikel', 'IBK', ['editar']);
// const moderador = new Moderador('Mikel', 'IBK', ['borrar', 'editar']);
console.log(moderador.obtenerPost());
console.log(moderador.permisos);
moderador.borrarPost(7);