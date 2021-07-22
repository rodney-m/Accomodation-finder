import React, { useState, useEffect } from "react";
import "./Offcampus.css";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import axios from "axios";

function Offcampus() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/offcampus/")
      .then((response) => {
        setHouses(response.data.filter((data) => data.approved === true));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="Offcampus">
      <h1> Off Campus </h1>{" "}
      <table cellSpacing="0">
        <thead>
          <tr>
            <td> Owner </td> <td> Address </td> <td> </td>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {houses.map((house) => {
            return (
              <tr>
                <td> {house.owner} </td> <td> {house.address} </td>{" "}
                <td>
                  <IconButton>
                    <InfoIcon className="info" />
                  </IconButton>{" "}
                </td>{" "}
              </tr>
            );
          })}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
}

export default Offcampus;
