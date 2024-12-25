import { render } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe("prueba en el componente GiftItem", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";
  
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });
});

/*
Este código es una prueba unitaria para el componente `GifItem` usando Jest y React Testing Library. 
Primero, define un bloque de pruebas con `describe`, que agrupa las pruebas relacionadas con el componente `GifItem`.
Dentro de este bloque, se definen dos constantes `title` y `url` que se usarán como props para el componente.
Luego, se define una prueba con `test` que verifica si el componente `GifItem` coincide con el snapshot guardado previamente.
La función `render` de React Testing Library se usa para renderizar el componente con las props `title` y `url`.
Finalmente, se usa `expect(container).toMatchSnapshot()` para comparar la salida renderizada con el snapshot almacenado.
*/
