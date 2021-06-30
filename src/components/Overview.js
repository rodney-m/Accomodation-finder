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
<<<<<<< HEAD

    return ( <
        div className = "Overview" >
        <
        PieChart data = { data[0] }
        /> <
        PieChart data = { data[1] }
        /> <
        PieChart data = { data[2] }
        /> <
        PieChart data = { data[3] }
        />

        <
        /div>
=======
   
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
>>>>>>> 5e9dd081c6dbfac8287fd9b060e73b9ea9c6e602
    )
}

export default Overview;