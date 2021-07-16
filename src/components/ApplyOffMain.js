import React from "react";
import "./ApplyOffMain.css";

import { IoTimeOutline } from "react-icons/io5";
import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import StarRating from "./StarRating";
import Button from '@material-ui/core/Button';


import HouseImg from "../images/off-campus-01.jpg";

function ApplyOffMain() {
  return (
    <div className="ApplyOffMain">
      <div className="houseThumb">
        <div className="image">
          <img src={HouseImg} alt="off campus house" />
        </div>
        <div className="text">
          <h4>54 Ganges Road, Belvedere</h4>
          <div className="properties">
            <span className="icon">
              <h6>10 PM</h6>
              <IoTimeOutline />
            </span>
            <span className="icon">
              <h6>5 </h6>
              <IoMdBed />
            </span>
            <span className="icon">
              <h6>2 </h6>
              <FaBath />
            </span>
          </div>
          <h4 className="price">$50 / month </h4>
          <div className="ratings">
            <StarRating />
          </div>
          <Button variant="contained" color="primary">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ApplyOffMain;
