import React from "react";
import "./ViewHostel.css";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { GiCctvCamera } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";

import Picture from "../images/hostel-pic1.jpg";

function ViewHostel({ hostel, setCurrentIndex }) {
  return (
    <div className="ViewHostel">
      <span className="close">
        <IconButton onClick={() => setCurrentIndex(null)}>
          <CloseIcon className="closeBtn" />
        </IconButton>
      </span>
      <div className="viewHostelBody">
        <div className="text">
          <h1>{hostel.name}</h1>
          <p>
            <span className="amenity">
              WiFi <FaWifi />
            </span>
            <span className="amenity">
              CCTV <GiCctvCamera />
            </span>
          </p>
          {hostel.name === "Hostel 2" ||
          hostel.name === "Hostel 3" ||
          hostel.name === "Hostel 4" ? (
            <h1>$ 6000</h1>
          ) : (
            <h1>$ 8000</h1>
          )}
          <IconButton>
            <span className="btn">Apply</span>
          </IconButton>
        </div>

        <div className="images">
        
            <div className="hostelPictures">
                <img src={Picture} alt="hostel pictures" />
                <img src={Picture} alt="hostel pictures" />
                <img src={Picture} alt="hostel pictures" />
                <img src={Picture} alt="hostel pictures" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default ViewHostel;
