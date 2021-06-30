import React, { useState, useEffect } from "react";
import PieChart from './PieChart'
import "./Overview.css"
import axios from 'axios';

function Overview() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/hostels/')
            .then(response => {
                setData(response.data)
            })

    })
   
    return (
        <div className="Overview">
            {data.length > 0 &&
            <>
            <PieChart data={data[0]} />
            <PieChart data={data[1]} />
            <PieChart data={data[2]} />
            <PieChart data={data[3]} />
            </>
            }      
        </div>
    )
}

export default Overview;