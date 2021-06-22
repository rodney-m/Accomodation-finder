import React from "react";
import "./DashboadNav.css";
import { Link } from "react-router-dom";
import SpeedIcon from "@material-ui/icons/Speed";
import {IconButton} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function DashboadNav() {
  return (
    <div className="DashboardNav">
      <div className="left">
        <SpeedIcon />
        <h3>DashBoard</h3>
      </div>
      <div className="right">
        <IconButton>
          <Link to="/"> 
          <h3 className="logout-btn">Logout</h3>
          </Link>
        </IconButton>
        <p className="user">Rodney Mupanduki</p>
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default DashboadNav;
