import ChartCards from "./ChartCards";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Styles/Dashboard.css";
import TopCards from "./TopCards";
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
          <div className="top-cards">
            <TopCards />
          </div>

          <div className="chart-cards">
            <ChartCards />
          </div>

          <div className="table-and-overview">
            <div className="table-section">Table</div>
            <div className="overview-section">Overview</div>
          </div>
        </div>
      </div>
    </div>
  );
}
