import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import "./HostelView.css";
import Image from "../images/hostel-pic1.jpg";

import { GiCctvCamera } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import LogInModal from "../components/LogInModal";
import axios from 'axios';

function HostelView() {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");
    const hostelNumber = useParams();
    const hostels = useSelector((state) => state.hostels);

    const currentHostel = hostels[hostelNumber.hostelNumber - 1];

    const onApply = (e) => {
        e.preventDefault();

        //axios.post('http://localhost:5000')
        setMessage("Thank you for applying, you can check your status from your dashboard")
        setShowModal(true)
    };

    return ( <
            div className = "HostelView" >
            <
            div className = "HostelViewText" >
            <
            h2 > { currentHostel.name } < /h2> <
            h1 > $ { currentHostel.prize } < /h1> <
            p > { currentHostel.description } < /p> <
            div className = "amenities" >
            <
            span amenity = "wifi" >
            <
            FaWifi / > Wifi <
            /span> <
            span amenity = "cctv" >
            <
            GiCctvCamera / > 24 / hr CCTV <
            /span> < /
            div > <
            IconButton >
            <
            Button variant = "contained"
            color = "primary"
            onClick = { onApply } >
            Apply <
            /Button> < /
            IconButton > <
            /div> <
            div className = "HostelViewImages" >
            <
            div className = "imagesGrid" >
            <
            div className = "mainImage" >
            <
            img src = { Image }
            alt = "" / >
            <
            /div> <
            div className = "bottomImages" >
            <
            img src = { Image }
            alt = "" / >
            <
            img src = { Image }
            alt = "" / >
            <
            img src = { Image }
            alt = "" / >
            <
            /div> < /
            div > <
            /div> {
            showModal ? ( <
                LogInModal setShowModal = { setShowModal }
                message = { message }
                />
            ) : (
                ""
            )
        } <
        /div>
);
}

export default HostelView;