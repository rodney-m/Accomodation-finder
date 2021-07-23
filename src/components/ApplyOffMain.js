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

function ApplyOffMain({filteringPrice}) {
  let houses = [
    {
      address: "54 Ganges Road, Belvedere",
      curfew: "10",
      availableBeds: 5,
      availableBathRooms: 2,
      price: 30,
      currentRating: 3,
      description:
        "This is a neat house. Only non smockers are permitted. Curfew is 10pm No visitors after 8pm",
    },
    {
      address: "4 Lowley Road, Belvedere",
      curfew: "7",
      availableBeds: 10,
      availableBathRooms: 1,
      price: 70,
      currentRating: 5,
      description:
        "This is a neat house. Only non smockers are permitted. Curfew is 10pm No visitors after 8pm",
    },
    {
      address: "9 Castens Ave, Belvedere",
      curfew: "8",
      availableBeds: 15,
      availableBathRooms: 3,
      price: 99,
      currentRating: 4,
      description:
        "This is a neat house. Only non smockers are permitted. Curfew is 10pm No visitors after 8pm",
    },
    {
      address: "8 Anson Road, Ridgeview",
      curfew: "10",
      availableBeds: 5,
      availableBathRooms: 2,
      price: 50,
      currentRating: 1,
      description:
        "This is a neat house. Only non smockers are permitted. Curfew is 10pm No visitors after 8pm",
    },
    {
      address: "17 Eyles Road, Belvedere",
      curfew: "10",
      availableBeds: 5,
      availableBathRooms: 2,
      price: 90,
      currentRating: 3,
      description:
        "This is a neat house. Only non smockers are permitted. Curfew is 10pm No visitors after 8pm",
    },
  ];

  let filteredHouses;
  filteredHouses = houses.filter((house)  => {
    return house.price < filteringPrice
  })

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
      {filteredHouses.map((house) => {
        return (
          <div className="houseThumb">
            <div className="houseThumbContainer">
              <div className="image">
                <img src={HouseImg} alt="off campus house" />
              </div>
              <div className="text">
                <h4>{house.address}</h4>
                <div className="properties">
                  <span className="icon">
                    <h6>{house.curfew} PM</h6>
                    <IoTimeOutline />
                  </span>
                  <span className="icon">
                    <h6>{house.availableBeds} </h6>
                    <IoMdBed />
                  </span>
                  <span className="icon">
                    <h6>{house.availableBathRooms} </h6>
                    <FaBath />
                  </span>
                </div>
                <h4 className="price">${house.price} / month </h4>
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
                    {house.description}
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
        );
      })}
    </div>
  );
}

export default ApplyOffMain;
