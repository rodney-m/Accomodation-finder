import React, {useState, useEffect} from "react";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import {IconButton} from "@material-ui/core";
import Modal from "./Modal";
import axios from 'axios';

function H3() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [h3List, setH3List] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/applications/')
  .then(response => {
       setH3List(response.data.filter(data => data.hostel === 3))
  })
  .catch(err => {
      console.log(err);
  })

  })
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
          {h3List.map((h3, index) => {
            return (
              <tr>
                <td>{h3.reg_no}</td>
                <td>{h3.fname}</td>
                <td>{h3.lname}</td>
                <td>{h3.year}</td>
                <td>{h3.room_no}</td>
                <td>{h3.department}</td>
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
      {currentIndex !== null && <Modal data={h3List[currentIndex]} setCurrentIndex={setCurrentIndex}/>}
    </div>
  );
}

export default H3;
