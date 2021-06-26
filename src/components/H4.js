import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import Modal from "./Modal";
import axios from 'axios';

function H4() {
  
  const [currentIndex, setCurrentIndex] = useState(null);
  const [h4List, setH4List] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/applications/')
  .then(response => {
       setH4List(response.data.filter(data => data.hostel === 4))
  })
  .catch(err => {
      console.log(err);
  })

  })
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
          {h4List.filter((h4) => h4.status === true).map((h4, index) => {
            return (
              <tr>
                <td>{h4.reg_no}</td>
                <td>{h4.fname}</td>
                <td>{h4.lname}</td>
                <td>{h4.year}</td>
                <td>{h4.room_no}</td>
                <td>{h4.department}</td>
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
        <Modal data={h4List[currentIndex]} setCurrentIndex={setCurrentIndex} />
      )}
    </div>
  );
}

export default H4;
