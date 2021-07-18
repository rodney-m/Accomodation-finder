import React, { useState, useEffect } from "react";
import "./Hostel.css";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import Modal from "./Modal";
import PendingModal from "./PendingModal";
import axios from "axios";


function H1() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [h1List, setH1List] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/applications/")
      .then((response) => {
        setH1List(response.data.filter((data) => data.hostel === 1));
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [viewPending, setViewPending] = useState(false);
  
  const onPending = () => {
    setViewPending(true)
  }

  return (
    <div className="Hostel">
      <h1> Hostel 1 </h1> 
      <span onClick={onPending} className="pending-btn"> Pending </span>
      <table cellSpacing="0">
        <thead>
          <tr>
            <td> Reg No. </td> <td> F.Name </td> <td> L.Name </td>
            <td> Year </td> <td> Room No. </td> <td> Department </td>
            <td> Detail </td>
          </tr>
        </thead>
        <tbody>
          
          {h1List.map((h1, index) => {
            return (
              <tr>
                <td> {h1.reg_no} </td> <td> {h1.fname} </td>
                <td> {h1.lname} </td> <td> {h1.year} </td>
                <td> {h1.room_no} </td> <td> {h1.department} </td>
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
      {currentIndex !== null && (
        <Modal data={h1List[currentIndex]} setCurrentIndex={setCurrentIndex} />
      )}

      {viewPending ? <PendingModal setViewPending={setViewPending} /> : ""}
    </div>
  );
}

export default H1;
