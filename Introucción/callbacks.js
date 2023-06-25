const obtenerPostsDeUsuario = (usuario, callback) => { console.log(`Obteniendo los post de ${usuario} ...`)
    setTimeout(() => {
        let posts = ['Posts1','Posts2','Posts3'];
        callback(posts);
    }, 2000);
}

obtenerPostsDeUsuario('mikel', (posts) => {
    console.log(posts);
});

