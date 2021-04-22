import "./HomepageHero.css";
import HeroForm from "./HeroForm";
import { FaCheck } from "react-icons/fa";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="heroText">
          <div className="container">
            <h1>
              Find your next <strong>Home</strong>
            </h1>
            <h2>Your student housing search ends here.</h2>
            <div className="tags">
              <div>
                <FaCheck /> Book any time
              </div>
              <div>
                <FaCheck /> Book Now, Pay Later
              </div>
              <div>
                <FaCheck /> Verified Off-campus Properties
              </div>
              <div>
                <FaCheck /> No Booking charges
              </div>
            </div>
          </div>
        </div>
        <HeroForm />
      </div>
    </div>
  );
}

export default Hero;
