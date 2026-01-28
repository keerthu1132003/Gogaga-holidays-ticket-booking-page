import "./FlightCard.css";
import { FaSuitcaseRolling, FaSuitcase, FaInfoCircle } from "react-icons/fa";
import { MdFlightTakeoff, MdOutlineAssignmentReturn } from "react-icons/md";

function FlightCard() {
  return (
    <div className="flight-card">
      <div className="flight-top">
        <div className="airline">
          <MdFlightTakeoff />

          <div>
            <div className="airline-name">Air India Express</div>
            <div className="flight-no">IX 2879 TC</div>
          </div>
        </div>

        <div className="time-block">
          <div className="time">12:05</div>
          <div className="city">HYD</div>
        </div>

        <div className="duration">
          <div>6h 25m</div>
          <span>1 stop via PNQ</span>
        </div>

        <div className="time-block">
          <div className="time">13:30</div>
          <div className="city">GOI</div>
        </div>
      </div>

      <div className="flight-price-row">
        <div className="price-option">
          <input type="checkbox" />
          <span className="price">₹13,300.00</span>
        </div>

        <div className="price-option">
          <input type="checkbox" />
          <span className="price">₹13,300.00</span>
          <span className="badge blue">Publish</span>
        </div>

        <div className="price-option">
          <input type="checkbox" />
          <span className="price">₹29,144.00</span>
          <span className="badge pink">ExpressBiz</span>
        </div>
      </div>

      <div className="flight-footer">
        <div>
          <FaSuitcaseRolling /> Hand Baggage - 7 Kg
        </div>
        <div>
          <FaSuitcase /> Check-in Baggage
        </div>
        <div>
          <MdOutlineAssignmentReturn /> Refundable
        </div>
        <div>
          <FaInfoCircle /> Rules
        </div>
      </div>
    </div>
  );
}

export default FlightCard;
