import React from 'react'
import "./DashboadNav.css"
import {Link, useLocation} from "react-router-dom";
import SpeedIcon from '@material-ui/icons/Speed';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function DashboadNav() {
    let location = useLocation();

    if (location.pathname === "/dashboard") {
        return (
        <div className="DashboardNav">
            <div className="left">
                <SpeedIcon />
                <h3>DashBoard</h3>
            </div>
            <div className="right">
                <h3 className="logout-btn">Logout</h3>
                <p className="user">Rodney Mupanduki</p>
                <AccountCircleIcon />
            </div>
        </div>
    )
        } else {
            return null;
        }
}

export default DashboadNav
