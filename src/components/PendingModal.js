import React from "react";
import "./PendingModal.css";
import CheckIcon from '@material-ui/icons/Check';
import { IconButton } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from '@material-ui/icons/Close';

function PendingModal({ setViewPending }) {

    const h1List = [
        {
            reg_no : "H190197F",
            fname: "Rodney",
            lname: "Mupanduki",
            year: "2.1",
            department: "ICS"
        }
    ]


  return (
    <div className="PendingModal">
      <span className="close">
        <IconButton onClick={() => setViewPending(false)}>
          <CloseIcon className="closeBtn" />
        </IconButton>
      </span>

      <div className="body">
        <table cellSpacing="0">
          <thead>
            <tr>
              <td> Reg No. </td> 
              <td> F.Name </td> 
              <td> L.Name </td>
              <td> Year </td> 
              <td> Room No. </td> 
              <td> Department </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
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
                    <IconButton>
                      <InfoIcon className="info" />
                    </IconButton>
                  </td>
                  <td>
                    <IconButton>
                      <CheckIcon className="accept" />
                    </IconButton>
                  </td>
                  <td>
                    <IconButton>
                      <CloseIcon className="reject" />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingModal;
