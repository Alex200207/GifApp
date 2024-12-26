import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { MdDelete } from "react-icons/md";

export const GifGrid = ({ category, onDeleteCategory }) => {
  const { images, isLoading } = useFetchGifs(category);
  //crear un estado local
  // const [images, setImages] = useState([]);
  // const getImage = async () => {
  //   const newImage = await getGifs(category);
  //   setImages(newImage);
  // };

  // //use efect es un hook que nos permite ejecutar codigo de manera condicional
  // useEffect(() => {
  //   getImage();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []); //el segundo argumento es un arreglo de dependencias que se ejecutara cuando la dependencia cambie

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>{category}</h3>
        <button onClick={() => onDeleteCategory(category)}>
          <MdDelete className="btn-delete" />
        </button>
      </div>
      {isLoading && <p>Cargando..</p>}

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
