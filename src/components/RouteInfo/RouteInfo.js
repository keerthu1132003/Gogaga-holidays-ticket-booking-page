import "./RouteInfo.css";
import { FiRepeat } from "react-icons/fi";
import { useState } from "react";

function RouteInfo() {
  const [from, setFrom] = useState({
    label: "From",
    place: "Rajiv Gandhi International Airport (HYD), Hyderabad, India",
    dateLabel: "Departure Date",
    date: "Tue, Mar 12, 2025",
  });

  const [to, setTo] = useState({
    label: "To",
    place: "Mopa Airport India (GOX), Goa, India",
    dateLabel: "Return Date",
    date: "Sun, Mar 17, 2025",
  });

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="route-wrapper">
      <div className="route-box">
        <div>
          <span className="route-label">{from.label}</span>
          <div className="route-place">{from.place}</div>
        </div>
        <div>
          <span className="route-date-label">{from.dateLabel}</span>
          <div className="route-date">{from.date}</div>
        </div>
      </div>

      <button className="swap-btn" onClick={handleSwap}>
        <FiRepeat />
      </button>

      <div className="route-box">
        <div>
          <span className="route-label">{to.label}</span>
          <div className="route-place">{to.place}</div>
        </div>
        <div>
          <span className="route-date-label">{to.dateLabel}</span>
          <div className="route-date">{to.date}</div>
        </div>
      </div>
    </div>
  );
}

export default RouteInfo;
