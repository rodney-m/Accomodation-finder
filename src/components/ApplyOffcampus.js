import React, {useState} from 'react'
import Sidebar from "./ApplyOffSidebar";
import MainArea from "./ApplyOffMain";
import "./ApplyOffcampus.css"
import {withRouter} from "react-router-dom"

function ApplyOffcampus() {
    const [price, setPrice] = useState(100);
    const [houseType, setHouseType] =  useState('Mixed');

    
    return (
        <div className="ApplyOffcampus">
            <Sidebar
             price={price} 
             setPrice={setPrice} 
             houseType={houseType}
             setHouseType={setHouseType}
             />

            <MainArea 
             filteringPrice={price}
             houseType={houseType}
             />
        </div>
    )
}

export default withRouter(ApplyOffcampus)
