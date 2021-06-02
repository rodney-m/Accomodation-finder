import React from 'react'
import "./DashboardSideBar.css"
import {Link} from "react-router-dom";



function DashboardSideBar() {
    return (
        <div className="DashboardSideBar">
            
            <div className="sideMenu">
                <ul className="sideMenu-links">
                    <Link to="/">
                        <li>Orders</li>
                    </Link>
                    <Link to="/add-customer">
                        <li>Add Customer</li>
                    </Link>
                    <Link to="/customers">
                        <li>Customers</li>                        
                    </Link>
                    <Link>
                        <li>Add New User</li>
                    </Link>                    
                </ul>
            </div>
        </div>
    )
}

export default DashboardSideBar
