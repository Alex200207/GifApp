import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("prueba en el componente GiftItem", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";
  
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });


  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

    render(<GifItem title={title} url={url} />);
    // screen.debug();
    //debug imprime en consola el arbol del componente
    // expect( screen.getByRole('img').src).toBe(url);
    // expect( screen.getByRole('img').alt).toBe(title);

    //forma correcta

    const {src, alt} = screen.getByRole('img');
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test('debe mostrar el titulo en el componente', () => { 
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();// esperamos q el titulo exista
   })
});
//screen es un objeto que nos permite buscar elementos en el arbol del componente
//getByRole es una funcion que nos permite buscar elementos por su rol
//container es el contenedor que contiene el componente renderizado
//toMatchSnapshot es una funcion que toma una instantanea de la salida del componente
//y la compara con la instantanea guardada
//si las instantaneas no coinciden, la prueba falla

/*
Este código es una prueba unitaria para el componente `GifItem` usando Jest y React Testing Library. 
Primero, define un bloque de pruebas con `describe`, que agrupa las pruebas relacionadas con el componente `GifItem`.
Dentro de este bloque, se definen dos constantes `title` y `url` que se usarán como props para el componente.
Luego, se define una prueba con `test` que verifica si el componente `GifItem` coincide con el snapshot guardado previamente.
La función `render` de React Testing Library se usa para renderizar el componente con las props `title` y `url`.
Finalmente, se usa `expect(container).toMatchSnapshot()` para comparar la salida renderizada con el snapshot almacenado.
*/
