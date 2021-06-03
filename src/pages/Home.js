import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"



function Home() {
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

    return (
        <div className="Home">
            <div className="showcase">
                <h1>Find your next home</h1>
                <p>Your student housing search ends here</p>
                <div  className="ctas">
                    
                        <span onClick={loginWithRedirect}>LogIn / SignUp</span>
                    
                    <Link to="/Houses">
                         <span>Houses</span>
                    </Link>
                    <Link to="/Hostels">
                         <span> Hostels</span>
                    </Link>
                </div>  
                <h3> User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>      
                {isAuthenticated && (
                <pre style= {{textAlign : 'start'}}>{JSON.stringify(user, null, 3)}</pre>
            )}        
            </div>
            <div className="bottom">
                <h2>Book your accommodation fast</h2>
                <p>Take the hassle out of securing your student housing for the best years of your life.</p>

                <div className="services">
                    <div className="service">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <h3>Right Place. Right Price</h3>
                            <p>We help you find the exact accommodation to fit your needs. Choose from lots of quality accommodations.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <h3>End-to-End Support</h3>
                            <p>
                            We will help you in sourcing, booking and the paperwork required in the process. No need to worry about a thing!
                            </p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <h3>
                            Incase you want to share accommodation, we help you find roommates through our extensive community.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
