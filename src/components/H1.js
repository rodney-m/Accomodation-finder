import React, {useState} from "react";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import {IconButton} from "@material-ui/core";
import Modal from "./Modal";

function H1() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const h1 = [
    {
      reg_no: "H190197F",
      fname: "Rodney Anesu",
      lname: "Mupanduki",
      year: "2.2",
      room_no: 110,
      department: "ICS",
    },
    {
      reg_no: "H190415Z",
      fname: "Lionnel",
      lname: "Tsuro",
      year: "2.2",
      room_no: 110,
      department: "ICS",
    },
    {
      reg_no: "H190232Q",
      fname: "Keith Panpan",
      lname: "Charedzera",
      year: "2.2",
      room_no: 109,
      department: "ICS",
    },
    {
      reg_no: "H190086F",
      fname: "Tinotenda",
      lname: "Mukwazhe",
      year: "2.2",
      room_no: 109,
      department: "ICS",
    },
  ];
  return (
    <div className="Hostel">
        <h1>Hostel 1</h1>
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
          {h1.map((h1, index) => {
            return (
              <tr>
                <td>{h1.reg_no}</td>
                <td>{h1.fname}</td>
                <td>{h1.lname}</td>
                <td>{h1.year}</td>
                <td>{h1.room_no}</td>
                <td>{h1.department}</td>
                <td>
                  <IconButton onClick={() => setCurrentIndex(index)}>
                    <InfoIcon className="info" />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Check if there is any students to list and if any student is selected then show in modal */}
      {currentIndex !== null && <Modal data={h1[currentIndex]} setCurrentIndex={setCurrentIndex}/>}
    </div>
  );
}

export default H1;
