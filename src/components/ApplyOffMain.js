import React, { useState } from "react";
import "./ApplyOffMain.css";

import { IoTimeOutline } from "react-icons/io5";
import { IoMdBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import StarRating from "./StarRating";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";

import HouseImg from "../images/off-campus-01.jpg";

function ApplyOffMain() {
  const [apply, setApply] = useState(false);
  const [moreInfoBtnText, setMoreInfoBtnText] = useState("More Info");

  const onApply = () => {
    setApply(!apply);
    if (apply) {
      setMoreInfoBtnText("More Info");
    } else {
      setMoreInfoBtnText("Close");
    }
  };

  return (
    <div className="ApplyOffMain">
      <div className="houseThumb">
        <div className="houseThumbContainer">
          <div className="image">
            <img src={HouseImg} alt="off campus house" />
          </div>
          <div className="text">
            <h4>54 Ganges Road, Belvedere</h4>
            <div className="properties">
              <span className="icon">
                <h6>10 PM</h6>
                <IoTimeOutline />
              </span>
              <span className="icon">
                <h6>5 </h6>
                <IoMdBed />
              </span>
              <span className="icon">
                <h6>2 </h6>
                <FaBath />
              </span>
            </div>
            <h4 className="price">$50 / month </h4>
            <div className="ratings">
              <StarRating />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={onApply}
              endIcon={<Icon>info</Icon>}
            >
              {moreInfoBtnText}
            </Button>
          </div>
        </div>

        {apply ? (
          <div className="fullDetails">
            <hr />
            <div className="images">
              <img src={HouseImg} alt="off campus house" />
              <img src={HouseImg} alt="off campus house" />
              <img src={HouseImg} alt="off campus house" />
              <img src={HouseImg} alt="off campus house" />
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>
                This is a neat house. Only non smockers are permitted Curfew is
                10pm No visitors after 8pm
              </p>
            </div>
            <form noValidate autoComplete="off">
              <div className="form-group">
                <TextField id="standard-basic" label="Enter Phone Number" />
              </div>

              <div className="form-group">
                <TextField
                  label="Message house owner"
                  multiline
                  rows={4}
                  defaultValue="I am interested in your house"
                  fullWidth
                />
              </div>

              <Button
                variant="contained"
                color="primary"
                endIcon={<Icon>send</Icon>}
                onClick={onApply}
              >
                Send
              </Button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default ApplyOffMain;
