import PropTypes from "prop-types";
import { FiDownload } from "react-icons/fi";

export const DowloadGif = ({ fileUrl, fileName }) => {
  const handleDownload = () => {
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], fileName, { type: blob.type });
        const fileURL = URL.createObjectURL(file);
        
        const a = document.createElement("a");
        a.href = fileURL;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => console.error("Error al descargar el archivo:", error));
  };

  return (
    <button onClick={handleDownload} className="btn-download">
      <FiDownload className="btn-download__icon" />
    </button>
  );
};

DowloadGif.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};
