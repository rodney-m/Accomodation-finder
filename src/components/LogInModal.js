import React from 'react'
import { GrClose } from "react-icons/gr";
import "./LogInModal.css"
import { useHistory, useLocation} from "react-router-dom"

function LogInModal({setShowModal, message}) {
    let location = useLocation()
    let history = useHistory()
    const onClose = () =>{
        if (location.pathname === "/landlords"){
            setShowModal(false)
            history.push("/");
        } 
        setShowModal(false)
    }
    return (
        <div className="LogInModal">
            <h3>Error</h3>
            <GrClose className="closeX" onClick={onClose} />
            <hr />
            <p>
                {message}
            </p>
        </div>
    )
}

export default LogInModal
