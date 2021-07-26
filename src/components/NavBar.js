import React, { useContext } from "react";
import Logo from "../images/hit.png";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import { LoginContext } from "../Helper/Context";
import { LoggedInAsContext } from "../Helper/Context";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


function NavBar() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const { loggedInAs, setLoggedInAs } = useContext(LoggedInAsContext);

  const onLogout = () => {
    setLoggedIn(false);
  };

  let location = useLocation();
  if (
    !location.pathname.startsWith("/dashboard") &&
    !location.pathname.startsWith("/landlords")
  ) {
    return (
      <div className="NavBar">
        <Link to="/">
          <img className="headerLogo" src={Logo} alt="HIT Logo" />
        </Link>
        <ul className="navLinks">
          <Link to="/Apply/oncampus">
            <li>Oncampus</li>
          </Link>

          <Link to="/Apply/offcampus">
            <li>Offcampus</li>
          </Link>

          <Link to="/Help">
            <li>Help</li>
          </Link>

          <Link to="/Contact">
            <li>Contact Us</li>
          </Link>
        </ul>
        <div className="navRight">
         { loggedIn ? <span className="user">
         <AccountCircleIcon />
          <p className="username">{loggedInAs.fullName}</p>        
          </span> : ""
          }
          {loggedIn ? (
            <Button onClick={onLogout} variant="contained" color="secondary">
              LogOut
            </Button>
          ) : (
            <Link to="/login">
              <Button variant="contained" color="primary">
                LogIn
              </Button>
            </Link>
          )}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default NavBar;
