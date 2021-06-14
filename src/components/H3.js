import React, {useState} from "react";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import {IconButton} from "@material-ui/core";
import Modal from "./Modal"


function H3() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const H3 = [
    {
      reg_no: "H170197F",
      fname: "Jane ",
      lname: "Doe",
      year: "2.2",
      room_no: 110,
      department: "ICS",
    },
    {
      reg_no: "H180415Z",
      fname: "Donald",
      lname: "Trump",
      year: "2.2",
      room_no: 110,
      department: "ICS",
    },
    {
      reg_no: "H180232Q",
      fname: "Sky",
      lname: "Blue",
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
        <h1>Hostel 3</h1>
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
          {H3.map((H3, index) => {
            return (
              <tr>
                <td>{H3.reg_no}</td>
                <td>{H3.fname}</td>
                <td>{H3.lname}</td>
                <td>{H3.year}</td>
                <td>{H3.room_no}</td>
                <td>{H3.department}</td>
                <td>
                  <IconButton>
                    <InfoIcon className="info"  onClick={() => setCurrentIndex(index)} />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Check if there is any students to list and if any student is selected then show in modal */}
      {currentIndex !== null && <Modal data={H3[currentIndex]} setCurrentIndex={setCurrentIndex}/>}
    </div>
  );
}

export default H3;
