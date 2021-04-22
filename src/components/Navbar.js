import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../images/hit.png";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const toggleMenu = () => {
    setNavToggle((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={Logo} alt="" />
          <ul className="desktop-nav">
            <li>
              <Link to="/apply">Apply</Link>
            </li>
            <li>
              <Link to="/hostels">Hostels</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          <FaAlignRight onClick={toggleMenu} className="nav-icon" />
        </div>
      </nav>

      <ul
        className={navToggle ? "mobile-menu show-mobile-menu" : "mobile-menu"}
      >
        <li>
          <Link to="/apply">Apply</Link>
        </li>
        <li>
          <Link to="/hostels">Hostels</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
