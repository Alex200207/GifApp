import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs"; // Adjust the import path as necessary

export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImage = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    setIsLoading(false);
  };

  //use efect es un hook que nos permite ejecutar codigo de manera condicional
  useEffect(() => {
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //el segundo argumento es un arreglo de dependencias que se ejecutara cuando la dependencia cambie

  return {
    images,
    isLoading,
  };
};
