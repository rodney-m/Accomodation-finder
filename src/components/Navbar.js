import "./Navbar.css";
import Logo from "../images/hit.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={Logo} alt="" />
        <ul>
          <li>Apply</li>
          <li>Hostels</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
