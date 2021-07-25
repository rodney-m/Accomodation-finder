import React, { useState, useEffect, useContext } from "react";
import ReplyIcon from "@material-ui/icons/Reply";
import { IconButton } from "@material-ui/core";
import "./HouseOwnerDashboard.css";
import axios from "axios";


function HouseOwnerDashboard() {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/applications/")
      .then((response) => {
        setApplicants(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="HouseOwnerDashboard">
      <h1> Interested Students </h1>{" "}
      <table cellSpacing="0">
        <thead>
          <tr>
            <td> F.Name </td> <td> L.Name </td> <td> Year </td> <td> Phone </td>{" "}
            <td> Email </td> <td> Message </td> <td> </td>{" "}
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {applicants.map((applicant, index) => {
            return (
              <tr>
                <td> {applicant.fname} </td> <td> {applicant.lname} </td>
                <td> {applicant.year} </td> <td> {applicant.phone} </td>
                <td> {applicant.email} </td> <td> {applicant.message} </td>
                <td>
                  <IconButton>
                    <ReplyIcon />
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

export default HouseOwnerDashboard;
