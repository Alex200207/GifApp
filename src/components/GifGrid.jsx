import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

export const GifGrid = ({ category }) => {
  //crear un estado local
  const [images, setImages] = useState([]);

  const getImage = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
  };

  //use efect es un hook que nos permite ejecutar codigo de manera condicional
  useEffect(() => {
    getImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); //el segundo argumento es un arreglo de dependencias que se ejecutara cuando la dependencia cambie
  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {images.map(
          (
            image //destructuramos el objeto
          ) => (
            <GifItem key={image.id} {...image} /> //usamos el spread operator para pasar las propiedades del objeto como props
          )
        )}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
