import React from "react";
import "./SingleRoom.css";

import image1 from "../images/off-campus-01.jpg";
import image2 from "../images/off-campus-02.jpg";
import image3 from "../images/off-campus-03.jpg";
import image4 from "../images/off-campus-04.jpg";
import image5 from "../images/off-campus-05.jpg";
import image6 from "../images/off-campus-06.jpg";

import { GiCctvCamera } from "react-icons/gi";
import {
  FaMapMarkerAlt,
  FaWalking,
  FaWifi,
  FaSwimmingPool,
} from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

function SingleRoom() {
  return (
    <div className="SingleRoom">
      <div className="roomDetails">
        <h2 className="title">Big Brother</h2>
        <h4 className="location">
          <FaMapMarkerAlt /> 16 Lawley Ave Harare
        </h4>
        <p>
          <FaWalking />3 min walk from school
        </p>
        <h3>Amenities</h3>
        <span amenity="wifi">
          <FaWifi /> Wifi
        </span>
        <span amenity="cctv">
          <GiCctvCamera /> 24/hr CCTV
        </span>
        <span amenity="kitchen">
          <MdKitchen /> Kitchen
        </span>
        <span amenity="pool">
          <FaSwimmingPool /> Pool
        </span>

        <div className="cta">
          <button>Enquire ></button> <button>Shortlist</button>
        </div>

        <h3 className="prize">$50/month</h3>
      </div>
      <div className="roomImages">
        <div className="mainImage">
          <img src={image1} alt="" />
        </div>
        <div className="otherImages">
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SingleRoom;
