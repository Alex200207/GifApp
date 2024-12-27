import { getGifs } from "../../helpers/getGifs"

describe('pruebas en getGifs', () => { 
    test('debe de retornar un arreglo de gifs', async () => { //usamos async para que la funcion sea asincrona


        const gifs = await getGifs('One Punch');//esperamos que la funcion getGifs retorne un arreglo de gifs
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan( 0); // esperamos que la longitud del arreglo sea mayor a 0

        

        expect( gifs[0]).toEqual({
            id: expect.any(String),// esperamos que la id espere cualquier string
            title: expect.any(String),// esperamos que el titulo sea cualquier string
            url: expect.any(String)// esperamos que la url sea cualquier string
        })
     })
 })


 