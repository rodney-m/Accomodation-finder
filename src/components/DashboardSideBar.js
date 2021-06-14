import React from "react";
import "./DashboardSideBar.css";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HouseIcon from "@material-ui/icons/House";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import HomeWorkIcon from "@material-ui/icons/HomeWork";

function DashboardSideBar() {
  return (
    <div className="DashboardSideBar">
      <div className="sideMenu">
        <ul className="sideMenu-links">
          <Link to="/dashboard/">
            <li>
              <AccessTimeIcon /> Overview
            </li>
          </Link>
          
            <li className="dropdown_parent">
              <HouseIcon /> Hostels
              <div className="dropdown">
                <Link to="/dashboard/hostels/h1">
                  <li>H1</li>
                </Link>
                <Link to="/dashboard/hostels/h2">
                  <li>H2</li>
                </Link>
                <Link to="/dashboard/hostels/h3">
                  <li>H3</li>
                </Link>
                <Link to="/dashboard/hostels/h4">
                  <li>H4</li>
                </Link>
              </div>
            </li>
          <Link to="/dashboard/requests">
            <li>
              <NotificationImportantIcon /> Requests
            </li>
          </Link>
          <Link to="/dashboard/off-campus">
            <li>
              <HomeWorkIcon /> Off Campus
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default DashboardSideBar;
