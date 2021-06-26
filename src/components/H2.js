import React, {useState, useEffect} from "react";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import {IconButton} from "@material-ui/core";
import Modal from "./Modal";
import axios from 'axios';

function H2() {
  const [currentIndex ,setCurrentIndex] = useState(null);
  const [h2List, setH2List] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/applications/')
  .then(response => {
       setH2List(response.data.filter(data => data.hostel === 2))
  })
  .catch(err => {
      console.log(err);
  })

  })
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
          {h2List.map((h2, index) => {
            return (
              <tr>
                <td>{h2.reg_no}</td>
                <td>{h2.fname}</td>
                <td>{h2.lname}</td>
                <td>{h2.year}</td>
                <td>{h2.room_no}</td>
                <td>{h2.department}</td>
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
      {currentIndex !== null && <Modal data={h2List[currentIndex]} setCurrentIndex={setCurrentIndex}/>}
    </div>
  );
}

export default H2;
