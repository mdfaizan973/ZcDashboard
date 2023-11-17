import ChartCards from "./ChartCards";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Overview from "./Overview";
import Sidebar from "./Sidebar";
import "./Styles/Dashboard.css";
import Table from "./Table";
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
            <div className="table-section">
              <Table />
            </div>
            <div className="overview-section">
              <Overview />
            </div>
          </div>

          <div className="footers">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
