import React from 'react'
import "./Error.css"
import {Link} from "react-router-dom";

function Error() {
    return (
        <div className="Error">
            <div className="ErrorBanner">
                <h1>404</h1>
                <p>We can't seem to find the page you are looking for</p>
                <Link to="/">
                   <span className="errorBtn"> &lt; Go Back To Home Page</span>
                </Link>
            </div>
        </div>
    )
}

export default Error
