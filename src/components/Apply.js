import React from "react";
import "./Apply.css";
import { IconButton } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

function Apply() {
  return (
    <div className="Apply">
      <div className="top-section">
        <div className="left">
          <h1>Apply On campus</h1>
          <Link to="/apply/oncampus">
            <IconButton>
              <span className="btn">Apply</span>
            </IconButton>
          </Link>
        </div>
        <div className="right">
          <h1>Appy Off-campus</h1>
          <Link to="/apply/offcampus">
            <IconButton>
              <span className="btn">Apply</span>
            </IconButton>
          </Link>
        </div>
      </div>
      <div className="bottom-section">
        <h1>Check Application Status</h1>
        <Link to="/apply/status">
          <IconButton>
            <span className="btn">Check</span>
          </IconButton>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Apply);
