import PropTypes from "prop-types";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { DowloadGif } from "../utils/DowloadGif";

export const GifItem = ({ title, url, id, onToggleFavorite, favorites }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copiada al portapapeles");
    });
  };

  const isFavorite = favorites.some((fav) => fav.id === id);

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <div className="btn-container">
        <button
          onClick={() => onToggleFavorite({ title, url, id })}
          className={`btn-container__share ${
            isFavorite ? "active" : ""
          }`}
        >
          {isFavorite ? (
            <MdFavorite className="btn-container__share_active" />
          ) : (
            <GrFavorite className="btn-container__share_icon" />
          )}
        </button>
        <button onClick={handleShare} className="btn-container__share">
          <IoCopyOutline className="btn-container__share_icon" />
        </button>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`Mira este GIF: ${url}`)}`}
          className="btn_container__whatsapp"
        >
          <FaWhatsapp className="btn-container__whatssap_icon" />
          <MdOutlineShare className="btn-container__whatssap_icon" />
          
        </a>
        <DowloadGif fileUrl={url} fileName={`${title}.gif`}/>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
};
