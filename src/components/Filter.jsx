import { useState } from "react";
import { Filter as FilterIcon, ChevronDown } from "lucide-react";


 const Filter = ({ limit, onLimitChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    onLimitChange(value);
    setIsOpen(false);
  };

  return (
    <div className="filter-container">
      <button
        className="filter-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <FilterIcon className="filter-icon" />
        <ChevronDown className={`chevron-icon ${isOpen ? 'rotate' : ''}`} />
      </button>

      {isOpen && (
        <div className="dropdown" role="listbox">
          <div className="dropdown-content">
            {[100, 5, 10, 15, 20].map((value) => (
              <button
                key={value}
                className={`dropdown-item ${limit === value ? 'selected' : ''}`}
                onClick={() => handleOptionClick(value)}
                role="option"
                aria-selected={limit === value}
              >
                {value === 100 ? 'Mostrar todo' : value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Filter;