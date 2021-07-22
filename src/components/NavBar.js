import React, { useContext } from "react";
import Logo from "../images/hit.png";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { LoginContext } from "../Helper/Context";
import Button from "@material-ui/core/Button";

function NavBar() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  const onLogout = () => {
    setLoggedIn(false);
  }

  let location = useLocation();
  if (!location.pathname.startsWith("/dashboard")) {
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

          <Link to="apply/offcampus">
            <li>Offcampus</li>
          </Link>

          <Link to="/Help">
            <li>Help</li>
          </Link>

          <Link to="/Contact">
            <li>Contact</li>
          </Link>

          <li>{loggedIn ? "Logged In" : "Not Logged In"} </li>
        </ul>
        {
          loggedIn ?
          <Button onClick={onLogout} variant="contained" color="secondary">
          LogOut
          </Button> : 
          <Link to="/login" >
            <Button variant="contained" color="primary">
              LogIn
        </Button>
          </Link>
        }
      </div>
    );
  } else {
    return null;
  }
}

export default NavBar;
