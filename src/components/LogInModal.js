import React from 'react'
import { GrClose } from "react-icons/gr";
import "./LogInModal.css"

function LogInModal({setShowModal, message}) {
    return (
        <div className="LogInModal">
            <h3>Error</h3>
            <GrClose className="close" onClick={() => setShowModal(false)} />
            <hr />
            <p>
                {message}
            </p>
        </div>
    )
}

export default LogInModal
