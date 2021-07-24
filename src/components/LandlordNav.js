import React from "react";
import Button from '@material-ui/core/Button';
import "./LandlordNav.css"
import {useLocation} from "react-router-dom"
import { AiOutlineDashboard } from "react-icons/ai";

function LandlordNav() {
    let location = useLocation();
    if(location.pathname.startsWith("/landlords")){
        return (
            <div className="LandlordNav">
              <div className="container">
                <div className="left">
                  <h3>
                    Dashboard <AiOutlineDashboard />
                  </h3>
                </div>
                <div className="right">
                  <Button variant="contained" color="secondary">
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          );
    } else {
        return null;
    }
  
}

export default LandlordNav;
