import React from 'react'
import PieChart from './PieChart'
import "./Overview.css"

function Overview() {
    const data= [
        {
            hostel : "h1",
            occupied: 12,
            unoccupied: 100,
            reserved : 15
        },
        {
            hostel : "h2",
            occupied: 72,
            unoccupied: 30,
            reserved : 15
        },
        {
            hostel : "h3",
            occupied: 130,
            unoccupied: 0,
            reserved : 15
        },
        {
            hostel : "h4",
            occupied: 45,
            unoccupied: 100,
            reserved : 3
        },
    ]
    return (
        <div className="Overview">
            <PieChart data={data[0]} />
            <PieChart data={data[1]} />
            <PieChart data={data[2]} />
            <PieChart data={data[3]} />
        </div>
    )
}

export default Overview
