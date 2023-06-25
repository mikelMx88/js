const fecthPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            const error = true;

            if(error){
                reject('Hubo un error al obtener los posts');
            }else{
                resolve(posts);
            }
        }, 2000);
    });
};

const mostrarPosts = async() => {
    try{
        const posts = await fecthPosts();
        console.log(posts)
    }catch(e){
        console.log(e)
    }
    // await 
};

mostrarPosts(); 

// console.log('Inicia operación');
// fecthPosts().then((posts) => {
//     console.log(posts);
// }).catch((error) => {
//     console.log(error)
// });
// console.log('Finaliza operación');
