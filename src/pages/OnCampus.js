import React from "react";
import "./Oncampus.css";

import { Link } from "react-router-dom";

import hostel from "../images/hostel.jpeg";

import { IoMan, IoWoman } from "react-icons/io5";

function OnCampus() {
  return (
    <div className="OnCampus">
      <div className="container">
        <Link to="rooms/single-room">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <h3 className="price">$10,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>

        <Link to="rooms/single-room">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <h3 className="price">$8,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>

        <Link to="rooms/single-room">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <h3 className="price">$8,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>

        <Link to="rooms/single-room">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <h3 className="price">$8,000 zwl / Semester</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default OnCampus;
