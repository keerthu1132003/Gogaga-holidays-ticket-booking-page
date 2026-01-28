import "./HeaderTabs.css";
import { useState } from "react";

function HeaderTabs() {
  const [active, setActive] = useState("indian");

  return (
    <div className="holiday-tabs">
      <button
        className={active === "indian" ? "tab active" : "tab"}
        onClick={() => setActive("indian")}
      >
        Indian Holidays
      </button>

      <button
        className={active === "international" ? "tab active" : "tab"}
        onClick={() => setActive("international")}
      >
        International Holidays
      </button>
    </div>
  );
}

export default HeaderTabs;
