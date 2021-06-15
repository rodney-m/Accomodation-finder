import React from 'react'
import "./ViewHostel.css"

function ViewHostel({hostel}) {
    return (
        <div className="ViewHostel">
            <h1>{hostel.name}</h1>
        </div>
    )
}

export default ViewHostel
