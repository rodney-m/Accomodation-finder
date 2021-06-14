import React, {useState} from "react";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import {IconButton} from "@material-ui/core";
import Modal from "./Modal";


function H2() {
  const [currentIndex ,setCurrentIndex] = useState(null);

  const H2 = [
    {
      reg_no: "H180197F",
      fname: "Mike ",
      lname: "Black",
      year: "2.2",
      room_no: 110,
      department: "ICS",
    },
    {
      reg_no: "H180415Z",
      fname: "John",
      lname: "Doe",
      year: "2.2",
      room_no: 110,
      department: "ICS",
    },
    {
      reg_no: "H180232Q",
      fname: "Jackie",
      lname: "Smith",
      year: "2.2",
      room_no: 109,
      department: "ICS",
    },
    {
      reg_no: "H190086F",
      fname: "Drake",
      lname: "Future",
      year: "2.2",
      room_no: 109,
      department: "ICS",
    },
  ];
  return (
    <div className="Hostel">
        <h1>Hostel 2</h1>
      <span className="pending-btn">Pending</span>
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
          {H2.map((H2, index) => {
            return (
              <tr>
                <td>{H2.reg_no}</td>
                <td>{H2.fname}</td>
                <td>{H2.lname}</td>
                <td>{H2.year}</td>
                <td>{H2.room_no}</td>
                <td>{H2.department}</td>
                <td>
                  <IconButton>
                    <InfoIcon className="info" onClick={() => setCurrentIndex(index)}/>
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Check if there is any students to list and if any student is selected then show in modal */}
      {currentIndex !== null && <Modal data={H2[currentIndex]} setCurrentIndex={setCurrentIndex}/>}
    </div>
  );
}

export default H2;
