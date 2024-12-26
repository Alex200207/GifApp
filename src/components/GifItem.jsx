import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copiada al portapapeles");
    });
  };

  return (
    <div
      className="card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={url}
        alt={title}
        style={{ maxWidth: "100%", borderRadius: "8px" }}
      />
      <p style={{ fontSize: "1.2em", fontWeight: "bold", margin: "12px 0" }}>
        {title}
      </p>
      <button
        onClick={handleShare}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Compartir
      </button>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
