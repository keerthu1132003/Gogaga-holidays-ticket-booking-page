import "./Sidebar.css";
import {
  MdDashboard,
  MdOutlineRateReview,
  MdOutlineReceiptLong,
  MdOutlineAccountBalance,
  MdOutlineAssessment,
  MdSupportAgent,
  MdSettings,
  MdOutlinePeopleAlt,
  MdOutlineInventory2,
} from "react-icons/md";
import { FaRegMap, FaUsers, FaHandshake, FaTruck } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-section-title">MENU</div>

      <div className="sidebar-item active">
        <MdDashboard className="icon" />
        <span>Dashboard</span>
      </div>

      <div className="sidebar-item">
        <HiOutlineTicket className="icon" />
        <span>Leads</span>
        <span className="badge">30434</span>
        <IoChevronForward className="arrow" />
      </div>

      <div className="sidebar-item">
        <FaRegMap className="icon" />
        <span>Itineraries</span>
        <IoChevronForward className="arrow" />
      </div>

      <div className="sidebar-item">
        <MdOutlineRateReview className="icon" />
        <span>Google Reviews</span>
      </div>

      <div className="sidebar-item">
        <MdOutlineReceiptLong className="icon" />
        <span>Vouchers</span>
        <IoChevronForward className="arrow" />
      </div>

      <div className="sidebar-item">
        <MdOutlineAccountBalance className="icon" />
        <span>Accounts</span>
        <IoChevronForward className="arrow" />
      </div>

      <div className="sidebar-item">
        <MdOutlineAssessment className="icon" />
        <span>Reports</span>
      </div>

      <div className="sidebar-item">
        <MdSupportAgent className="icon" />
        <span>Customer Support</span>
      </div>

      <div className="sidebar-section-title">USER CONTROL</div>

      <div className="sidebar-item">
        <MdSettings className="icon" />
        <span>User Settings</span>
        <IoChevronForward className="arrow" />
      </div>

      <div className="sidebar-item">
        <MdOutlinePeopleAlt className="icon" />
        <span>Masters Settings</span>
      </div>

      <div className="sidebar-item">
        <MdOutlineInventory2 className="icon" />
        <span>HRM</span>
      </div>

      <div className="sidebar-item">
        <MdOutlineInventory2 className="icon" />
        <span>Assets Management</span>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-section-title">PARTICIPANTS</div>

      <div className="sidebar-item">
        <FaUsers className="icon" />
        <span>Itinerary Customers</span>
      </div>

      <div className="sidebar-item">
        <FaHandshake className="icon" />
        <span>Partners</span>
      </div>

      <div className="sidebar-item">
        <FaTruck className="icon" />
        <span>Suppliers</span>
        <IoChevronForward className="arrow" />
      </div>

      <div className="sidebar-section-title">MISCELLANEOUS</div>
    </aside>
  );
}

export default Sidebar;
