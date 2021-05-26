import React from 'react'
import Logo from '../images/hit.png';
import "./NavBar.css"
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/">
                 <img className="headerLogo" src={Logo} alt="HIT Logo" />
            </Link>
            <ul className="navLinks">
                <li>Hostels</li>
                <li>Off Campus</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </div>
    )
}

export default NavBar;
