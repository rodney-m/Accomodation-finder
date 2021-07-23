import React from "react";
import ReplyIcon from "@material-ui/icons/Reply";
import { IconButton } from "@material-ui/core";
import "./HouseOwnerDashboard.css";

function HouseOwnerDashboard() {
  let applicants = [
    {
      fname: "Rodney",
      lname: "Mupanduki",
      year: 2.2,
      phone: "0777696113",
      email: "h190197f@hit.ac.zw",
      message:
        "Hi, im intrested in your place. I need somewhere with a wheelchair ramp",
    },
    {
      fname: "Keith",
      lname: "Charedzera",
      year: 2.2,
      phone: "0777896003",
      email: "h190789f@hit.ac.zw",
      message: "Hi, im intrested in your place. Do you have a parking space",
    },
    {
      fname: "Lionnel",
      lname: "Tsuro",
      year: 2.2,
      phone: "0887696113",
      email: "h190177Z@hit.ac.zw",
      message: "Hi, im intrested in your place. Do you allow girls to visit",
    },
  ];
  return (
    <div className="HouseOwnerDashboard">
      <h1>Intrested Students</h1>
      <table cellSpacing="0">
        <thead>
          <tr>
            <td>F. Name</td>
            <td>L.Name </td>
            <td> Year </td>
            <td> Phone</td>
            <td> Email</td>
            <td> Message </td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => {
            return (
              <tr>
                <td> {applicant.fname} </td> <td> {applicant.lname} </td>
                <td> {applicant.year} </td> <td> {applicant.phone} </td>
                <td> {applicant.email} </td> <td> {applicant.message} </td>
                <td>
                  <IconButton>
                    <ReplyIcon />
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

export default HouseOwnerDashboard;
