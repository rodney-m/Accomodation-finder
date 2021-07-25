import React, { useState, useContext } from "react";

import "./DashboadNav.css";
import { Link } from "react-router-dom";
import SpeedIcon from "@material-ui/icons/Speed";
import {IconButton} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Button from "@material-ui/core/Button";

import { AdminLoginContext } from "../Helper/Context";

function DashboadNav() {
  const { isAdmin, setIsAdmin } = useContext(AdminLoginContext);
  const onLogout = () => {
    setIsAdmin(false);
  }
  return (
    <div className="DashboardNav">
      <div className="left">
        <SpeedIcon />
        <h3>DashBoard</h3>
      </div>
      <div className="right">
        
        <IconButton>
          <Button onClick={onLogout} variant="contained" color="secondary">
          LogOut
          </Button> 
        </IconButton>
        <p className="user">Rodney Mupanduki</p>
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default DashboadNav;
