import React from "react";
import "./NotPayedUp.css";
import WarningIcon from "@material-ui/icons/Warning";
import Payments from "../images/payments.png";
import { Link } from "react-router-dom";

function NotPayedUp() {
  return (
    <div className="NotPayedUp">
      <div className="container">
        <WarningIcon fontSize="large" />
        <h1>Tuition payment required</h1>
        <p>
          For you to apply for on-campus housing you are supposed to pay your at
          least 75% of your tuition. If you have payed kindly email the finance team at <Link to="mailto:finances@hit.ac.zw">finances@hit.ac.zw</Link>
        </p>

        <a href="https://www.hit.ac.zw/online-payment.html" target="_blank">
            <img src={Payments} alt="paayment methods" />
        </a>
      </div>
    </div>
  );
}

export default NotPayedUp;
