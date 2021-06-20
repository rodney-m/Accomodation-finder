import React from "react";
import "./Requests.css";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import Accept from '@material-ui/icons/CheckCircleOutline';
import Decline from '@material-ui/icons/HighlightOff';

function Requests() {
  const requests = [
    {
      name: "John Doe",
      address: "67 Skymaster Belvedere",
      gender: "Mixed",
      beds: 5,
    },
    {
      name: "Jane Doe",
      address: "34 Ganges Road",
      gender: "Female",
      beds: 10,
    },
    {
      name: "John Smith",
      address: "28 Ganges Road",
      gender: "Male",
      beds: 15,
    },
  ];
  return (
    <div className="Requests">
      <h1>Requests</h1>
      <table cellSpacing="0">
        <thead>
          <tr>
            <td>Owner</td>
            <td>Address</td>
            <td>Gender</td>
            <td>Beds</td>
            <td>View More Details</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => {
            return (
              <tr>
                <td>{request.name}</td>
                <td>{request.address}</td>
                <td>{request.gender}</td>
                <td>{request.beds}</td>
                <td>
                  <IconButton>
                    <InfoIcon className="info" />
                  </IconButton>
                </td>
                <td>
                <IconButton>
                    <Accept className="accept"/>
                  </IconButton>
                </td>
                <td>
                <IconButton>
                    <Decline className="decline" />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Requests;
