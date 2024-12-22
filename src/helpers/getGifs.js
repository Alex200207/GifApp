    export const getGifs = async (category) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=01c3druSQnLj0n10cIRcIsxyhTGcNnPt&q=${category}&limit=10`;
        const resp = await fetch(url);//hacemos la peticion a la api
        const {data} = await resp.json();//`data` es un arreglo de objetos que contiene la informacion de los gifs

        
//creamos una variable que mapea la data para obtener la id title y url usando la api accedemos a sus propiedades
        const gifs = data.map( img => ({
             
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
        } )
        );
        console.log(gifs);//mostramos los gifs
        return gifs;//retornarmos los gifs
    }