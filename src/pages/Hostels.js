import React from "react";
import "./Hostels.css";

import { Link } from "react-router-dom";

import hostel from "../images/hostel.jpeg";

import { IoMan, IoWoman } from "react-icons/io5";

function Hostels() {
  return (
    <div className="Hostels">
      <div className="container">
        <Link to="/H1">
          <div className="hostel">
            <div className="hostelThumbnail">
              <img src={hostel} alt="" />
            </div>
            <div className="hostelDetails">
              <h3 className="title">Hostel 1</h3>
              <p className="gender">
                <IoMan /> <IoWoman /> Men & Women
              </p>
              <p className="details">
                Co-ed Hostel.
              </p>
              <h3 className="price">$10,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>

        <Link to="H2">
          <div className="hostel">
            <div className="hostelThumbnail">
              <img src={hostel} alt="" />
            </div>
            <div className="hostelDetails">
              <h3 className="title">Hostel 2</h3>
              <p className="gender">
                <IoMan /> Men
              </p>
              <p className="details">
                Hostel for males only.
              </p>
              <h3 className="price">$8,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>

        <Link to="/H3">
          <div className="hostel">
            <div className="hostelThumbnail">
              <img src={hostel} alt="" />
            </div>
            <div className="hostelDetails">
              <h3 className="title">Hostel 3</h3>
              <p className="gender">
                <IoMan /> Men
              </p>
              <p className="details">
              Hostel for males only.
              </p>
              <h3 className="price">$8,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>

        <Link to="/H4">
          <div className="hostel">
            <div className="hostelThumbnail">
              <img src={hostel} alt="" />
            </div>
            <div className="hostelDetails">
              <h3 className="title">Hostel 4</h3>
              <p className="gender">
                <IoWoman /> Women
              </p>
              <p className="details">
              Hostel for females only.
              </p>
              <h3 className="price">$8,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Hostels;
