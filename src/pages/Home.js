import React from 'react'
import "./Home.css"
import {Link} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react"
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Footer from '../components/Footer';
import { FaHome } from "react-icons/fa";



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

            <div className="center">
                <h2>Book your accommodation fast</h2>
                <p>Take the hassle out of securing your student housing for the best years of your life.</p>
            </div>


            <div className="bottom">
                
            
                <div className="services">
                      <div className="service">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <HomeIcon color="primary" style={{ fontSize: 40 }}/>
                            <h3>Right Place. Right Price</h3>
                            <p>We help you find the exact accommodation to fit your needs. Choose from lots of quality accommodations.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="logo">

                        </div>
                        <div className="text">
                            <ContactSupportIcon color="primary" style={{ fontSize: 40 }}/>
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
                            <RateReviewIcon color="primary" style={{ fontSize: 40 }}/>
                            <h3> Our properties have reviuews and ratings</h3>
                            <p>
                                There are reviews and ratings from students who have lived in the properties.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    )
}

export default Home
