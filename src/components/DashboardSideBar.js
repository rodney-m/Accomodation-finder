import React from 'react'
import "./DashboardSideBar.css"
import {Link} from "react-router-dom";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HouseIcon from '@material-ui/icons/House';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import HomeWorkIcon from '@material-ui/icons/HomeWork';



function DashboardSideBar() {
    return (
        <div className="DashboardSideBar">
            
            <div className="sideMenu">
                <ul className="sideMenu-links">
                    <Link to="/dashboad">
                        <li><AccessTimeIcon /> Overview</li>
                    </Link>
                    <Link to="/dashboard/applications">
                        <li className="dropdown_parent"><HouseIcon /> Hostels
                            <div className="dropdown">
                            <li>H1</li>
                            <li>H2</li>
                            <li>H3</li>
                            <li>H4</li>
                            </div>
                        </li>
                    </Link>
                    <Link to="/dashboard/requests">
                        <li><NotificationImportantIcon /> Requests</li>                        
                    </Link>
                    <Link to="/dashboard/settings">
                        <li><HomeWorkIcon /> Off Campus</li>
                    </Link>                    
                </ul>
            </div>
        </div>
    )
}

export default DashboardSideBar
