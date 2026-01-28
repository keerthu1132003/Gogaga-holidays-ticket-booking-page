import "./TopHeader.css";
import { FiGrid } from "react-icons/fi";

function TopHeader() {
  return (
    <div className="top-header">
      <div />

      <div className="top-right">
        <div className="icon-box">
          <FiGrid />
        </div>

        <div className="user">
          <div className="avatar">G</div>
          <span className="username">Girish Kumar</span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
