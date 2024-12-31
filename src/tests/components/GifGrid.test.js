import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
//hacer un mock completo de nuestro custom hook

//primer paso
jest.mock('../../hooks/useFetchGifs');//decimos que haga un mock completo de este path


describe("Pruebas en el componente <GifGrid/>", () => {
  const category = "One Punch";
  test("Debe de moestrar el loading inicialmente", () => {

    //segundo paso
    //decir al tes como va funcinar el useFetchGifs
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..")); //esperamos que el texto cargando exista
    screen.debug();
  });

  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {


    //segundo paso
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/cualquier/cosa.jpg',
      title: 'Cualquier cosa'
    }];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

        render(<GifGrid category={category} />);

       //hacer assercion
       expect(screen.getAllByRole('img').length).toBe(1);
  });
});


