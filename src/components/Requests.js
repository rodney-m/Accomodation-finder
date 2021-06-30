import React, { useState, useEffect } from "react";
import "./Requests.css";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton } from "@material-ui/core";
import Accept from '@material-ui/icons/CheckCircleOutline';
import Decline from '@material-ui/icons/HighlightOff';
import axios from 'axios';

function Requests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/requests/')
            .then(response => {
                setRequests(response.data)
            })
            .catch(err => {
                console.log(err);
            })

    })

    return ( <
        div className = "Requests" >
        <
        h1 > Requests < /h1> <
        table cellSpacing = "0" >
        <
        thead >
        <
        tr >
        <
        td > Owner < /td> <
        td > Address < /td> <
        td > Gender < /td> <
        td > Beds < /td> <
        td > View More Details < /td> <
        td > < /td> <
        td > < /td> < /
        tr > <
        /thead> <
        tbody > {
            requests.map((request) => {
                return ( <
                    tr >
                    <
                    td > { request.name } < /td> <
                    td > { request.address } < /td> <
                    td > { request.gender } < /td> <
                    td > { request.beds } < /td> <
                    td >
                    <
                    IconButton >
                    <
                    InfoIcon className = "info" / >
                    <
                    /IconButton> < /
                    td > <
                    td >
                    <
                    IconButton >
                    <
                    Accept className = "accept" / >
                    <
                    /IconButton> < /
                    td > <
                    td >
                    <
                    IconButton >
                    <
                    Decline className = "decline" / >
                    <
                    /IconButton> < /
                    td > <
                    /tr>
                );
            })
        } <
        /tbody> < /
        table > <
        /div>
    );
}

export default Requests;