import React from "react";
import DashboardMain from "../components/DashboardMain";
import DashBoadSideBar from "../components/DashboardSideBar";
import DashBoardNav from "../components/DashboadNav";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>      
      <DashBoardNav />
      <div className="Dashboard">
        <DashBoadSideBar />
        <DashboardMain />
      </div>
    </>
  );
}

export default Dashboard;
