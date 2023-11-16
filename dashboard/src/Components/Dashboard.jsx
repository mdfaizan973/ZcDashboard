import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Styles/Dashboard.css";
export default function Dashboard() {
  return (
    <div>
      <div className="main_container">
        <div className="sidebar_container">
          <Sidebar />
        </div>

        <div className="content_container">
          <div className="navbar">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
