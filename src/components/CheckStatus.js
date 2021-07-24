import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import { IconButton } from "@material-ui/core";
import "./CheckStatus.css"

function CheckStatus() {
    let applications = [
        {
            date: "06/07/2021",
            on_off_campus: "OffCampus",
            address_hostel: "41 Castens",
            status: "Pending",
            message: "" 
        },
        {
            date: "06/07/2021",
            on_off_campus: "Oncampus",
            address_hostel: "hostel 4",
            status: "Accepted",
            message: "" 
        },
    ]
    return (
        <div className="CheckStatus">
            <h1>Application</h1>
            <table cellSpacing="0">
        <thead>
          <tr>
            <td>Date</td> 
            <td>OnCampus / OffCampus</td> 
            <td> Address / Hostel </td> 
            <td> Status</td> 
            <td> Message</td> 
            <td>  </td>
          </tr>
        </thead>
        <tbody>
          
          {applications.map((application, index) => {
            return (
              <tr>
                <td> {application.date} </td> <td> {application.on_off_campus} </td>
                <td> {application.address_hostel} </td> <td> {application.status} </td>
                <td> {application.message} </td>
                <td>
                  <IconButton>
                    <CancelIcon />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
    )
}

export default CheckStatus
