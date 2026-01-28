import Sidebar from "./components/Sidebar/Sidebar";
import TopHeader from "./components/TopHeader/TopHeader";
import HeaderTabs from "./components/HeaderTabs/HeaderTabs";
import SearchFilters from "./components/SearchFilters/SearchFilters";
import RouteInfo from "./components/RouteInfo/RouteInfo";
import FareSummary from "./components/FareSummary/FareSummary";
import FlightList from "./components/FlightList/FlightList";

function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f6fa" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <TopHeader />

        <div style={{ padding: "20px" }}>
          <HeaderTabs />
          <SearchFilters />
          <RouteInfo />
          <FareSummary />
          <FlightList />
        </div>
      </div>
    </div>
  );
}

export default App;
