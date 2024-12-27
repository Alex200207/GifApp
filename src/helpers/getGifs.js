import { API_KEY, API_URL } from "../constants/constantes";

    export const getGifs = async (category, limit) => {
        const url = `${API_URL}api_key=${API_KEY}&q=${category}&limit=${limit}`;
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

    //un helper es una funcion que nos ayuda a realizar una tarea especifica
        //en este caso la tarea es obtener los gifs de la api