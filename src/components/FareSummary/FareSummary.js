import "./FareSummary.css";

function FareSummary() {
  return (
    <div className="fare-bar">
      <div className="fare-block">
        <div className="fare-title">Departure - Air India</div>
        <div className="fare-row">
          <span className="fare-time">11:30 → 18:55</span>
          <span className="fare-amount">₹105,300.00</span>
        </div>
      </div>
      <div className="fare-vertical-divider" />

      <div className="fare-block">
        <div className="fare-title">Return - Air India</div>
        <div className="fare-row">
          <span className="fare-time">00:50 → 01:55</span>
          <span className="fare-amount">₹105,300.00</span>
        </div>
      </div>

      <div className="fare-total-block">
        <div>for 2 adult, 2 children</div>
        <div className="fare-passengers">
          <div className="fare-total"> Total Round Fees</div>
          <div className="fare-total">₹210,600.00</div>
        </div>
      </div>
    </div>
  );
}

export default FareSummary;
