import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";

describe("Pruebas en el componente <GifGrid/>", () => {
  const category = "One Punch";
  test("Debe de moestrar el loading inicialmente", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..")); //esperamos que el texto cargando exista
    screen.debug();
  });
});
