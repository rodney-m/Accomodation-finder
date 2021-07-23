import React, {useState} from 'react'
import Sidebar from "./ApplyOffSidebar";
import MainArea from "./ApplyOffMain";
import "./ApplyOffcampus.css"
import {withRouter} from "react-router-dom"

function ApplyOffcampus() {
    const [price, setPrice] = useState(0);
    const [houseType, setHouseType] =  useState('female');

    
    return (
        <div className="ApplyOffcampus">
            <Sidebar
             price={price} 
             setPrice={setPrice} 
             houseType={houseType}
             setHouseType={setHouseType}
             />

            <MainArea />
        </div>
    )
}

export default withRouter(ApplyOffcampus)
