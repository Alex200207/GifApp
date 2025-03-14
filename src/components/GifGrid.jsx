import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { AiOutlineDelete } from "react-icons/ai";
import {motion} from 'framer-motion'

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
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {category}: {images.length} resultados
          </motion.h3>
          <button onClick={() => onDeleteCategory(category)}>
            <AiOutlineDelete className="btn-delete" />
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
