import PropTypes from "prop-types";
import { IoCopyOutline } from "react-icons/io5";
import { MdOutlineShare } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export const GifItem = ({ title, url }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copiada al portapapeles");
    });
  };

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <div className="btn-container">
        <button onClick={handleShare} className="btn-container__share">
          <IoCopyOutline className="btn-container__share_icon" />
        </button>
        <a
          href={`https://api.whatsapp.com/send?text=${url}`}
          className="btn_container__whatsapp"
        >
          <FaWhatsapp className="btn-container__whatssap_icon" />
          <MdOutlineShare className="btn-container__whatssap_icon" />
        </a>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
