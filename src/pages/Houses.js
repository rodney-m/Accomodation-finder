import React from 'react';
import "./Houses.css";
import { Link } from "react-router-dom";
import hostel from "../images/hostel.jpeg";
import { IoMan, IoWoman } from "react-icons/io5";
import Footer from '../components/Footer';

function Houses() {
    return (
        <div className="Houses">
      <div className="container">
        <Link to="/SingleRoom">
          <div className="hostel">
            <div className="hostelThumbnail">
              <img src={hostel} alt="" />
            </div>
            <div className="hostelDetails">
              <h3 className="title">House 1</h3>
              <p className="gender">
                <IoMan /> <IoWoman /> Men & Women
              </p>
              <p className="details">
                Co-ed Boarding house.
              </p>
              <h3 className="price">$10,000 zwl / Month</h3>
            </div>
          </div>
        </Link>
        </div>

        <Footer/>
        </div>
    )
}

export default Houses;