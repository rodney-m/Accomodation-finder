import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import Modal from "./Modal";

function H4() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const H4 = [
    {
      reg_no: "H180197F",
      fname: "Mike ",
      lname: "Black",
      year: "2.2",
      room_no: 110,
      department: "ICS",
      status: false,
    },
    {
      reg_no: "H180415Z",
      fname: "John",
      lname: "Doe",
      year: "2.2",
      room_no: 110,
      department: "ICS",
      status: true,
    },
    {
      reg_no: "H180232Q",
      fname: "Jackie",
      lname: "Smith",
      year: "2.2",
      room_no: 109,
      department: "ICS",
      status: false,
    },
    {
      reg_no: "H190086F",
      fname: "Drake",
      lname: "Future",
      year: "2.2",
      room_no: 109,
      department: "ICS",
      status: true,
    },
  ];
  return (
    <div className="Hostel">
      <h1>Hostel 4</h1>
      <Link to="/dashboard/hostels/h4/pending">
        <span className="pending-btn" >
          Pending
        </span>
      </Link>
     
      <table cellSpacing="0">
        <thead>
          <tr>
            <td>Reg No.</td>
            <td>F. Name</td>
            <td>L. Name</td>
            <td>Year</td>
            <td>Room No.</td>
            <td>Department</td>
            <td>Detail</td>
          </tr>
        </thead>
        <tbody>
          {H4.filter((H4) => H4.status === true).map((H4, index) => {
            return (
              <tr>
                <td>{H4.reg_no}</td>
                <td>{H4.fname}</td>
                <td>{H4.lname}</td>
                <td>{H4.year}</td>
                <td>{H4.room_no}</td>
                <td>{H4.department}</td>
                <td>
                  <IconButton>
                    <InfoIcon
                      className="info"
                      onClick={() => setCurrentIndex(index)}
                    />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Check if there is any students to list and if any student is selected then show in modal */}
      {currentIndex !== null && (
        <Modal data={H4[currentIndex]} setCurrentIndex={setCurrentIndex} />
      )}
    </div>
  );
}

export default H4;
