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
      <div style={{ display: "flex" , justifyContent: "space-between" , gap: "10px"}}>
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
        Copiar URL
      </button>
      <a
        href={`https://api.whatsapp.com/send?text=${url}`}
        style={{
          padding: "8px 16px",
          backgroundColor: "#25d366",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Compartir por WhatsApp
      </a>
      </div>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
