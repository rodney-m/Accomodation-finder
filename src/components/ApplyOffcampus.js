import React from 'react'
import Sidebar from "./ApplyOffSidebar";
import MainArea from "./ApplyOffMain";
import "./ApplyOffcampus.css"
import {withRouter} from "react-router-dom"

function ApplyOffcampus() {
    return (
        <div className="ApplyOffcampus">
            <Sidebar />
            <MainArea />
        </div>
    )
}

export default withRouter(ApplyOffcampus)
