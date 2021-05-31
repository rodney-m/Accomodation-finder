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
    
                <Link to="/Apply">
                <li>Apply</li>
                </Link>

                <Link to="/Houses">
                <li>Houses</li>
                </Link>

                <Link to="/Hostels">
                <li>Hostels</li>
                </Link>

                <Link to="/Help">
                <li>Help</li>
                </Link>

                <Link to="/Contact">
                <li>Contact</li>
                </Link>

                
            </ul>
        </div>
    )
}

export default NavBar;
