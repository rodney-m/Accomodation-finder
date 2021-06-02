import React from 'react'
import DashboardMain from '../components/DashboardMain';
import DashBoadSideBar from "../components/DashboardSideBar";
import "./Dashboard.css"

function Dashboard() {
    return (
        <div className="Dashboard">
            <DashBoadSideBar />
            <DashboardMain />
        </div>
    )
}

export default Dashboard