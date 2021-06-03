import React from 'react'
import "./DashboardSideBar.css"
import {Link} from "react-router-dom";



function DashboardSideBar() {
    return (
        <div className="DashboardSideBar">
            
            <div className="sideMenu">
                <ul className="sideMenu-links">
                    <Link to="/">
                        <li>Overview</li>
                    </Link>
                    <Link to="/add-customer">
                        <li>Applications</li>
                    </Link>
                    <Link to="/customers">
                        <li>Requests</li>                        
                    </Link>
                    <Link>
                        <li>Settings</li>
                    </Link>                    
                </ul>
            </div>
        </div>
    )
}

export default DashboardSideBar
