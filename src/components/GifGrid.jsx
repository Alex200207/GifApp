import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { MdDeleteOutline } from "react-icons/md";

export const GifGrid = ({
  category,
  onDeleteCategory,
  limit,
  onToggleFavorite,
  favorites,
}) => {
  const { images, isLoading } = useFetchGifs(category, limit);
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
      <div className="container">
        <div className="container-title">
          <h3>
            {category}: {images.length} concidencias
          </h3>
          <button onClick={() => onDeleteCategory(category)}>
            <MdDeleteOutline className="btn-delete" />
          </button>
        </div>
        {isLoading && <p>Cargando..</p>}

        <div className="card-grid">
          {images.map(
            (
              image //destructuramos el objeto
            ) => (
              <GifItem
                key={image.id}
                {...image}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites}
              /> //usamos el spread operator para pasar las propiedades del objeto como props
            )
          )}
        </div>
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
