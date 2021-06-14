import React from 'react'
import "./Modal.css"
import CloseIcon from '@material-ui/icons/Close';
import {IconButton} from "@material-ui/core";

function Modal({setCurrentIndex, data}) {
    return (
        <div className="Modal">
            <span className="close">
                <IconButton onClick={() => setCurrentIndex(null)}>
                    <CloseIcon className="closeBtn" />
                </IconButton>
            </span>
            
            <table>
                <tr>
                    <td>Reg No.</td>
                    <td>{data.reg_no}</td>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>{data.fname} {data.lname}</td>
                </tr>
                <tr>
                    <td>Year </td>
                    <td>{data.year}</td>
                </tr>
                <tr>
                    <td>Room No. </td>
                    <td>{data.room_no}</td>
                </tr>
                <tr>
                    <td>Department </td>
                    <td>{data.department}</td>
                </tr>
            </table>
        </div>
    )
}

export default Modal
