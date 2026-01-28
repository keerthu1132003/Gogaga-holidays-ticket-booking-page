import "./SearchFilters.css";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

function SearchFilters({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [passengers, setPassengers] = useState("2 Adults, 2 Children");

  const options = [
    "1 Adult",
    "2 Adults",
    "2 Adults, 1 Child",
    "2 Adults, 2 Children",
    "3 Adults",
  ];

  return (
    <div className="search-wrapper">
      <div className="search-row">
        <div className="field large">
          <span className="field-label">Destination</span>
          <input placeholder="City" />
        </div>

        <div className="field">
          <span className="field-label">Trip start date</span>
          <div className="field-value">Tue, Mar 12</div>
        </div>

        <div className="field dropdown" onClick={() => setOpen(!open)}>
          <span className="field-label">No of Passengers</span>
          <div className="dropdown-value">
            {passengers}
            <FiChevronDown />
          </div>

          {open && (
            <div className="dropdown-menu">
              {options.map((item) => (
                <div
                  key={item}
                  className="dropdown-item"
                  onClick={() => {
                    setPassengers(item);
                    setOpen(false);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="search-icon-btn" onClick={onSearch}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
}

export default SearchFilters;
