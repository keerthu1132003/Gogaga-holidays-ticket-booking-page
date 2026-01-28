import "./FlightList.css";
import FlightCard from "../FlightCard/FlightCard";

function FlightList() {
  return (
    <div className="flight-grid">
      <div className="flight-column">
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>

      <div className="flight-column">
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </div>
    </div>
  );
}

export default FlightList;
