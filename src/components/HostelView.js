import React from 'react'
import { useParams } from 'react-router'
import {useSelector} from "react-redux"
import {IconButton} from "@material-ui/core";
import "./HostelView.css"
import Image from "../images/hostel-pic1.jpg"


function HostelView() {
    const hostelNumber = useParams();
    const hostels = useSelector(state => state.hostels);

    const currentHostel = hostels[hostelNumber.hostelNumber - 1];
    console.log(currentHostel);
    return (
        <div className="HostelView">
            <div className="HostelViewText">
                <h2>{currentHostel.name}</h2>
                <h1>$ {currentHostel.prize}</h1>
                <IconButton>
                    <span className="btn">Apply</span>
                </IconButton>
            </div>
            <div className="HostelViewImages">
                <div className="imagesGrid">
                    <div className="mainImage">
                        <img src={Image} alt="" />                        
                    </div>
                    <div className="bottomImages">
                        <img src={Image} alt="" />
                        <img src={Image} alt="" />
                        <img src={Image} alt="" />
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default HostelView
