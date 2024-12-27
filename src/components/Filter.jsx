import { useState } from "react";
import { CiFilter } from "react-icons/ci";

const Filter = ({ limit, onLimitChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    onLimitChange(Number(event.target.value));
    setIsOpen(false);
  };

  return (
    <div className="filter-container" style={{ position: "relative" }}>
      <CiFilter
        className="search__filter"
        style={{ cursor: "pointer", fontSize: "24px" }}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <select
          id="limit-select"
          value={limit}
          onChange={handleChange}
          style={{
            position: "absolute",
            top: "30px",
            left: "0",
            zIndex: 1000,
            width: "100px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <option value={5} style={{ padding: "5px" }}>
            5
          </option>
          <option value={10} style={{ padding: "5px" }}>
            10
          </option>
          <option value={15} style={{ padding: "5px" }}>
            15
          </option>
          <option value={20} style={{ padding: "5px" }}>
            20
          </option>
        </select>
      )}
    </div>
  );
};

export default Filter;
