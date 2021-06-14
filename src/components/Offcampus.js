import React from 'react'
import "./Offcampus.css"
import InfoIcon from "@material-ui/icons/Info";
import {IconButton} from "@material-ui/core";

function Offcampus() {
    const houses = [
        {
          name: "John Doe",
          address: "67 Skymaster Belvedere",
        },
        {
          name: "Jane Doe",
          address: "34 Ganges Road",
        },
        {
          name: "John Smith",
          address: "28 Ganges Road",
        },
      ];
    return (
        <div className="Offcampus">
            <h1>Off Campus</h1>
            <table cellSpacing="0">
        <thead>
          <tr>
            <td>Owner</td>
            <td>Address</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => {
            return (
              <tr>
                <td>{house.name}</td>
                <td>{house.address}</td>
                <td>
                  <IconButton>
                    <InfoIcon className="info" />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    )
}

export default Offcampus
