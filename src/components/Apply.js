import React from 'react'
import "./Apply.css"
import {IconButton} from "@material-ui/core";
import {Link} from "react-router-dom"


function Apply() {
    return (
        <div className="Apply">
            <div className="left">
                <h1>Apply On campus</h1>
                <Link to="/apply/oncampus">
                    <IconButton>
                        <span className="btn">Apply</span>
                    </IconButton>
                </Link>                
                
            </div>
            <div className="right">
                <h1>Appy Off-campus</h1>
                <Link to="/apply/offcampus">
                    <IconButton>
                        <span className="btn">Apply</span>
                    </IconButton>
                </Link>
                
            </div>
        </div>
    )
}

export default Apply
