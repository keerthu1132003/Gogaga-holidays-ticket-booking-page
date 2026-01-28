import "./PackageTabs.css";

function PackageTabs() {
  return (
    <div className="package-tabs">
      <div className="package-tab active">Package with Flights</div>
      <div className="package-tab">Package without Flights</div>
    </div>
  );
}

export default PackageTabs;
