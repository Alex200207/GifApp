import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("Pruebas en el hook de useFechGifs", () => {
  test("debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch", 10)); ///el hook que vamos a probar
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("debe retornar un arreglo de imagens y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch", 10));

    //los waitFor son para esperar a que se resuelva la promesa
    //current es el estado actual del hook

    await waitFor(
      () =>
        //decimons esperate a que el resultado sea mayor a 0
        expect(result.current.images.length).toBeGreaterThan(0) //espera a que el arreglo de imagenes sea mayor a 0
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0); //espera a que el arreglo de imagenes sea mayor a 0
    expect(isLoading).toBeFalsy(); //espera a que isLoading sea falso
  });
});
